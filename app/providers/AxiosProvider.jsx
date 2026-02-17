"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import axios from "axios";

const AxiosContext = createContext(null);

export const AxiosProvider = ({ children }) => {
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.com/api/",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return instance;
  }, []);

  useEffect(() => {
    let isRefreshing = false;
    let failedQueue = [];

    const processQueue = (error = null) => {
      failedQueue.forEach((prom) => {
        if (error) {
          prom.reject(error);
        } else {
          prom.resolve();
        }
      });
      failedQueue = [];
    };

    //  Response Interceptor

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            }).then(() => axiosInstance(originalRequest));
          }

          originalRequest._retry = true;
          isRefreshing = true;

          try {
            //  Call refresh endpoint
            await axiosInstance.post("/auth/refresh/");

            processQueue();
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            processQueue(refreshError);

            //  If refresh fails → logout
            window.location.href = "/login";
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosInstance]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = useContext(AxiosContext);

  if (!context) {
    throw new Error("useAxios must be used inside AxiosProvider");
  }

  return context;
};
