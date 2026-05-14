"use client"

import { useRef, useState } from "react"
import { ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function OtpVerification() {
  const companyName = "AQS"

  const [otp, setOtp] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ])

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Handle typing
  const handleChange = (
    value: string,
    index: number
  ) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input automatically
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault()

    const pastedData = e.clipboardData
      .getData("text")
      .slice(0, 6)
      .replace(/\D/g, "")

    if (!pastedData) return

    const newOtp = [...otp]

    pastedData.split("").forEach((char, index) => {
      newOtp[index] = char
    })

    setOtp(newOtp)

    const focusIndex =
      pastedData.length >= 6
        ? 5
        : pastedData.length

    inputRefs.current[focusIndex]?.focus()
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">

          {/* Logo */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#042379] to-[#0A4DCC] flex items-center justify-center shadow-lg shadow-blue-200">
            <ShieldCheck className="w-9 h-9 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#071143] mt-6">
            Verify OTP
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mt-3 text-center text-[17px]">
            Enter the 6-digit code sent to your email to continue to{" "}
            <span className="font-semibold text-[#042379]">
              {companyName}
            </span>
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form className="space-y-6">

            {/* OTP Inputs */}
            <div>
              <label className="text-sm font-medium text-gray-600 mb-4 block text-center">
                Verification Code
              </label>

              <div className="flex items-center justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                      handleChange(
                        e.target.value,
                        index
                      )
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(e, index)
                    }
                    onPaste={handlePaste}
                    className="w-12 h-14 rounded-xl bg-[#f5f7ff] border border-transparent focus:border-[#042379] focus:bg-white outline-none text-center text-xl font-semibold transition-all"
                  />
                ))}
              </div>
            </div>

            {/* Resend */}
            <div className="text-center text-sm text-gray-500">
              Didn’t receive the code?{" "}
              <button
                type="button"
                className="font-medium text-[#042379] hover:underline cursor-pointer"
              >
                Resend OTP
              </button>
            </div>

            {/* Submit */}
            <Link to="/reset-password">
              <button
                type="submit"
                className="w-full h-14 rounded-xl cursor-pointer bg-linear-to-r from-[#042379] to-[#0A4DCC] hover:opacity-95 transition-all text-white text-lg font-semibold shadow-lg shadow-blue-200"
              >
                Verify Code
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}