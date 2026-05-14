"use client"

import { ArrowLeft, Mail, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const companyName = "AQS"

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">

          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#042379] to-[#0A4DCC] flex items-center justify-center shadow-lg shadow-blue-200">
            <ShieldCheck className="w-9 h-9 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#071133] mt-6">
            Forgot Password
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mt-3 text-center text-[17px]">
            Enter your email address and we’ll send you
            a password reset link for your{" "}
            <span className="font-semibold text-[#042379]">
              {companyName}
            </span>{" "}
            account.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600 mb-2 block">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-xl bg-[#f5f7ff] border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none pl-12 pr-4 text-[16px]"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-14 cursor-pointer rounded-xl bg-linear-to-r from-[#042379] to-[#0A4DCC]  hover:opacity-95 transition-all text-white text-lg font-semibold shadow-lg shadow-blue-200"
            >
              Send Reset Link
            </button>

            {/* Back */}
            <Link
              to="/"
              className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#042379] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Secure password recovery powered by{" "}
          <span className="font-semibold text-[#042379]">
            {companyName}
          </span>
        </p>
      </div>
    </div>
  )
}