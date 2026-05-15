"use client"

import { useState } from "react"
import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react"
import { useFormColorStore } from "../store/formColorStore"

export default function ResetPassword() {
  const [showPassword, setShowPassword] =
    useState(false)

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false)

  const companyName = "AQS"

  // dynamic colors
  const color = useFormColorStore()

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundColor:
          color.formBackgroundColor,
      }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg"
            style={{
              background: `linear-gradient(to bottom right, ${color.gradientFrom}, ${color.gradientTo})`,
              boxShadow: `0 10px 25px ${color.shadowColor}`,
            }}
          >
            <LockKeyhole
              className="w-9 h-9"
              style={{
                color: color.lockKeyHoleColor,
              }}
            />
          </div>

          {/* Title */}
          <h1
            className="text-2xl font-bold mt-6"
            style={{
              color: color.h1,
            }}
          >
            Reset Password
          </h1>

          {/* Subtitle */}
          <p
            className="mt-3 text-center text-[17px]"
            style={{
              color: color.formParagraphColor,
            }}
          >
            Create a new secure password for
            your{" "}
            <span
              className="font-semibold"
              style={{
                color: color.spanColor,
              }}
            >
              {companyName}
            </span>{" "}
            account
          </p>
        </div>

        {/* Form */}
        <div
          className="rounded-3xl shadow-xl border p-8"
          style={{
            backgroundColor:
              color.cardBackground,
            borderColor:
              color.formCardBorderColor,
          }}
        >
          <form className="space-y-5">
            {/* New Password */}
            <div>
              <label
                className="text-sm font-medium mb-2 block"
                style={{
                  color: color.formLabelColor,
                }}
              >
                New Password
              </label>

              <div className="relative">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter new password"
                  className="w-full h-14 rounded-xl border border-transparent transition-all outline-none px-4 pr-12 text-[16px]"
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

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition"
                  style={{
                    color:
                      color.inputIconsColor,
                  }}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="text-sm font-medium mb-2 block"
                style={{
                  color: color.formLabelColor,
                }}
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm new password"
                  className="w-full h-14 rounded-xl border border-transparent transition-all outline-none px-4 pr-12 text-[16px]"
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

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition"
                  style={{
                    color:
                      color.inputIconsColor,
                  }}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-14 rounded-xl cursor-pointer hover:opacity-95 transition-all text-lg font-semibold shadow-lg"
              style={{
                background: `linear-gradient(to right, ${color.gradientFrom}, ${color.gradientTo})`,
                color:
                  color.lockKeyHoleColor,
                boxShadow: `0 10px 25px ${color.shadowColor}`,
              }}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}