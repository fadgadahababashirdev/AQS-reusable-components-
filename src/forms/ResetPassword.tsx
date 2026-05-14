
import { useState } from "react"
import {
  Eye,
  EyeOff,
  LockKeyhole,
  
} from "lucide-react"


export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const companyName = "AQS"

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">

          {/* Logo */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#042379] to-[#0A4DCC] flex items-center justify-center shadow-lg shadow-blue-200">
            <LockKeyhole className="w-9 h-9 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#071143] mt-6">
            Reset Password
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mt-3 text-center text-[17px]">
            Create a new secure password for your{" "}
            <span className="font-semibold text-[#042379]">
              {companyName}
            </span>{" "}
            account
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form className="space-y-5">

            {/* New Password */}
            <div>
              <label className="text-sm font-medium text-gray-600 mb-2 block">
                New Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full h-14 rounded-xl bg-[#f5f7ff] border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none px-4 pr-12 text-[16px]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#042379] transition"
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
              <label className="text-sm font-medium text-gray-600 mb-2 block">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="w-full h-14 rounded-xl bg-[#f5f7ff] border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none px-4 pr-12 text-[16px]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#042379] transition"
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
              className="w-full h-14 rounded-xl cursor-pointer bg-linear-to-r from-[#042379] to-[#0A4DCC] hover:opacity-95 transition-all text-white text-lg font-semibold shadow-lg shadow-blue-200"
            >
              Reset Password
            </button>

          
          </form>
        </div>

       
      </div>
    </div>
  )
}