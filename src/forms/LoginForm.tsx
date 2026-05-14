
import { useState } from "react"
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

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
            Welcome Back
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mt-3 text-center text-[17px]">
            Sign in to continue to your{" "}
            <span className="font-semibold text-[#042379]">
              {companyName}
            </span>{" "}
            dashboard
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form className="space-y-5">

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

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600 mb-2 block">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            {/* Actions */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-[#042379]"
                />

                <span className="text-sm text-gray-500">
                  Remember me
                </span>
              </label>

              <Link to="/forgot-password">
              <button
                type="button"
                className="text-sm cursor-pointer  font-medium text-[#042379]"
              >
                Forgot password?
              </button>
              </Link>
            </div>

            {/* Submit */}
           <Link to="/dashboard">
            <button
              type="submit"
              className="w-full h-14 rounded-xl cursor-pointer bg-linear-to-r from-[#042379] to-[#0A4DCC] hover:opacity-95 transition-all text-white text-lg font-semibold shadow-lg shadow-blue-200 mt-2"
            >
              Sign In
            </button>
           </Link>
          </form>
        </div>

      </div>
    </div>
  )
}