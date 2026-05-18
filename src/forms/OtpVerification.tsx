

import { useRef, useState } from "react"

import { Link } from "react-router-dom"
import { useFormColorStore } from "../store/formColorStore"
import { useCompanyInfo } from "../store/companyInformation"

export default function OtpVerification() {
  const companyName = useCompanyInfo(
     (state) => state.containedInfo.companyName || "AQS",
   );
   const companyLogo = useCompanyInfo(
     (state) => state.containedInfo.companyLogo || "../../favicon.svg",
   );

  // dynamic colors
  const color = useFormColorStore()

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
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundColor: color.formBackgroundColor,
      }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center "
            
          >
            <img
              src={companyLogo}
              alt="Logo not found"
              className="w-9 h-9 "
           
            />
          </div>

          {/* Title */}
          <h1
            className="text-2xl font-bold mt-6"
            style={{
              color: color.h1,
            }}
          >
            Verify OTP
          </h1>

          {/* Subtitle */}
          <p
            className="mt-3 text-center text-[17px]"
            style={{
              color: color.formParagraphColor,
            }}
          >
            Enter the 6-digit code sent to your email
            to continue to{" "}
            <span
              className="font-semibold"
              style={{
                color: color.spanColor,
              }}
            >
              {companyName}
            </span>
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl shadow-xl border p-8"
          style={{
            backgroundColor: color.cardBackground,
            borderColor: color.formCardBorderColor,
          }}
        >
          <form className="space-y-6">
            {/* OTP Inputs */}
            <div>
              <label
                className="text-sm font-medium mb-4 block text-center"
                style={{
                  color: color.formLabelColor,
                }}
              >
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
                    className="w-12 h-14 rounded-xl border border-transparent outline-none text-center text-xl font-semibold transition-all"
                    style={{
                      backgroundColor:
                        color.inputBackgroundColor,
                     
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor =
                        color.primaryColor
                      e.target.style.backgroundColor =
                        color.cardBackground
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor =
                        "transparent"
                      e.target.style.backgroundColor =
                        color.inputBackgroundColor
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Resend */}
            <div
              className="text-center text-sm"
              style={{
                color: color.formParagraphColor,
              }}
            >
              Didn’t receive the code?{" "}
              <button
                type="button"
                className="font-medium hover:underline cursor-pointer transition-all"
                style={{
                  color: color.primaryColor,
                }}
              >
                Resend OTP
              </button>
            </div>

            {/* Submit */}
            <Link to="/reset-password">
              <button
                type="submit"
                className="w-full h-14 rounded-xl cursor-pointer hover:opacity-95 transition-all text-lg font-semibold shadow-lg"
                style={{
                  background: `linear-gradient(to right, ${color.gradientFrom}, ${color.gradientTo})`,
                  color: color.lockKeyHoleColor,
                  boxShadow: `0 10px 25px ${color.shadowColor}`,
                }}
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