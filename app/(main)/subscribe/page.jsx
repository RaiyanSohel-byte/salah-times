"use client";

import React, { useState } from "react";
import {
  Check,
  MessageCircle,
  Search,
  Filter,
  MapPin,
  Mail,
  Smartphone,
} from "lucide-react";
import { Inter, Lato } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
// Mock Data
const PRAYERS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
const MOSQUES = [
  { id: 1, name: "Baitul Mukarram National Mosque", address: "Dhaka • 2.3 km" },
  { id: 2, name: "Gulshan Central Mosque", address: "Gulshan • 3.1 km" },
  { id: 3, name: "Mohammedpur Shia Mosque", address: "Mohammedpur • 5.0 km" },
];

export default function SubscriptionFlow() {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("whatsapp");
  const [selectedMosques, setSelectedMosques] = useState([1]);
  const [preferences, setPreferences] = useState(
    PRAYERS.reduce((acc, prayer) => {
      acc[prayer] = true;
      return acc;
    }, {}),
  );

  const toggleMosque = (id) => {
    setSelectedMosques((prev) =>
      prev.includes(id) ? prev.filter((mId) => mId !== id) : [...prev, id],
    );
  };

  const togglePreference = (prayer) => {
    setPreferences((prev) => ({
      ...prev,
      [prayer]: !prev[prayer],
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className="py-[196px] text-center bg-gradient-to-b from-[#1F8A5B] to-[#1F6F8B] w-full">
        <h1
          className={`font-bold text-4xl lg:text-[66px] text-white ${lato.className}`}
        >
          <span className="text-[#26FFA0] italic">Subscribe</span> to Prayer
          Times
        </h1>
        <p className={`lg:text-2xl text-[#D0E0FF] ${inter.className} mt-4`}>
          Never miss a prayer with automated notifications
        </p>
      </div>
      <main className="px-4 sm:px-6 mt-30">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 md:p-10 border border-gray-50">
          {/* STEPPER INDICATOR (Hide on Success step) */}
          {step < 4 && (
            <div className="flex items-center justify-center mb-10 max-w-lg mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 1 ? "bg-[#238B57] text-white" : "bg-gray-100 text-gray-400"}`}
                >
                  {step > 1 ?
                    <Check size={16} />
                  : "1"}
                </div>
                <span className="text-xs font-medium mt-2 text-slate-500">
                  Method
                </span>
              </div>
              <div
                className={`flex-1 h-0.5 mx-4 transition-colors ${step >= 2 ? "bg-[#238B57]" : "bg-gray-200"}`}
              ></div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 2 ? "bg-[#238B57] text-white" : "bg-gray-100 text-gray-400"}`}
                >
                  {step > 2 ?
                    <Check size={16} />
                  : "2"}
                </div>
                <span className="text-xs font-medium mt-2 text-slate-500">
                  Mosques
                </span>
              </div>
              <div
                className={`flex-1 h-0.5 mx-4 transition-colors ${step >= 3 ? "bg-[#238B57]" : "bg-gray-200"}`}
              ></div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 3 ? "bg-[#238B57] text-white" : "bg-gray-100 text-gray-400"}`}
                >
                  3
                </div>
                <span className="text-xs font-medium mt-2 text-slate-500">
                  Preferences
                </span>
              </div>
            </div>
          )}

          {/* ================= STEP 1: METHOD ================= */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-center text-slate-800 mb-2">
                Choose Notification Method
              </h2>
              <p className="text-center text-sm text-slate-500 mb-8">
                Select how you want to receive prayer alerts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* WhatsApp Option */}
                <div
                  onClick={() => setMethod("whatsapp")}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${method === "whatsapp" ? "border-[#238B57] bg-[#F2F9F5]" : "border-gray-100 hover:border-gray-200"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <Smartphone size={20} />
                    </div>
                    <span className="font-bold text-slate-800">WhatsApp</span>
                  </div>
                  <p className="text-xs text-slate-500 ml-13">
                    Get instant updates via WhatsApp messages.
                  </p>
                </div>

                {/* Email Option */}
                <div
                  onClick={() => setMethod("email")}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${method === "email" ? "border-[#238B57] bg-[#F2F9F5]" : "border-gray-100 hover:border-gray-200"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold text-slate-800">Email</span>
                  </div>
                  <p className="text-xs text-slate-500 ml-13">
                    Receive daily prayer schedules in your inbox.
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-slate-700">
                  {method === "whatsapp" ? "WhatsApp Number" : "Email Address"}{" "}
                  *
                </label>
                <input
                  required
                  type={method === "whatsapp" ? "tel" : "email"}
                  placeholder={
                    method === "whatsapp" ? "+880 1XXX-XXXXXX" : (
                      "your.email@example.com"
                    )
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#238B57] focus:border-[#238B57] transition-all"
                />
              </div>

              <button
                onClick={nextStep}
                className="w-full bg-[#238B57] hover:bg-[#1a6e44] text-white font-bold rounded-xl py-4 text-sm transition-colors shadow-sm"
              >
                Continue
              </button>
            </div>
          )}

          {/* ================= STEP 2: MOSQUES ================= */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-center text-slate-800 mb-2">
                Select Mosques
              </h2>
              <p className="text-center text-sm text-slate-500 mb-8">
                Choose which mosques you want updates from.
              </p>

              {/* Tools Bar */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search mosques..."
                    className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#238B57]"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:bg-gray-50 transition-colors">
                  <Filter size={16} /> Filters
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#238B57] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a6e44] transition-colors">
                  <MapPin size={16} /> Use My Location
                </button>
              </div>

              {/* Mosques List */}
              <div className="space-y-3 mb-8">
                {MOSQUES.map((mosque) => (
                  <div
                    key={mosque.id}
                    onClick={() => toggleMosque(mosque.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${selectedMosques.includes(mosque.id) ? "border-[#238B57] bg-[#F2F9F5]" : "border-gray-100 bg-white hover:border-gray-200"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-lg shadow-sm">
                        🕌
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800">
                          {mosque.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {mosque.address}
                        </p>
                      </div>
                    </div>
                    {/* Checkbox representation */}
                    <div
                      className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${selectedMosques.includes(mosque.id) ? "bg-[#238B57] border-[#238B57] text-white" : "border-gray-300"}`}
                    >
                      {selectedMosques.includes(mosque.id) && (
                        <Check size={14} strokeWidth={3} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Actions */}
              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="w-1/3 border border-gray-200 text-slate-600 hover:bg-gray-50 font-bold rounded-xl py-4 text-sm transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="w-2/3 bg-[#238B57] hover:bg-[#1a6e44] text-white font-bold rounded-xl py-4 text-sm transition-colors shadow-sm"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: PREFERENCES ================= */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-center text-slate-800 mb-2">
                Prayer Preferences
              </h2>
              <p className="text-center text-sm text-slate-500 mb-8">
                Select which prayers you want to be notified for.
              </p>

              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden mb-8">
                {PRAYERS.map((prayer, index) => (
                  <div
                    key={prayer}
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${index !== PRAYERS.length - 1 ? "border-b border-gray-50" : ""}`}
                    onClick={() => togglePreference(prayer)}
                  >
                    <span className="text-sm font-semibold text-slate-700">
                      {prayer}
                    </span>
                    {/* Toggle Switch */}
                    <div
                      className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${preferences[prayer] ? "bg-[#238B57]" : "bg-gray-200"}`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${preferences[prayer] ? "translate-x-5" : "translate-x-0"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Actions */}
              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="w-1/3 border border-gray-200 text-slate-600 hover:bg-gray-50 font-bold rounded-xl py-4 text-sm transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="w-2/3 bg-[#238B57] hover:bg-[#1a6e44] text-white font-bold rounded-xl py-4 text-sm transition-colors shadow-sm"
                >
                  Confirm Subscription
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 4: SUCCESS ================= */}
          {step === 4 && (
            <div className="animate-in zoom-in-95 duration-500 text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-[#238B57] mx-auto mb-6 shadow-sm">
                <Check size={40} strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Successfully Subscribed!
              </h2>
              <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto">
                Alhamdulillah! You will now receive prayer time notifications
                based on your selected preferences.
              </p>

              <button
                onClick={() => setStep(1)} // Reset for demo purposes, normally redirects
                className="bg-[#238B57] hover:bg-[#1a6e44] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
