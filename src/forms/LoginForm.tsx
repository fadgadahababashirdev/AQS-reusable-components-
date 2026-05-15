import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useFormColorStore } from "../store/formColorStore";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const companyName = "AQS";
  // dynamic color variable
  const color = useFormColorStore();
  return (
    <div
      className="min-h-screen  flex items-center justify-center p-6"
      style={{ backgroundColor: color.formBackgroundColor }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <div
            className="w-20 h-20 rounded-3xl  flex items-center justify-center shadow-lg shadow-blue-200"
            style={{
              background: `linear-gradient(to bottom right, ${color.gradientFrom}, ${color.gradientTo})`,
            }}
          >
            <LockKeyhole className="w-9 h-9 " style={{color:color.lockKeyHoleColor}} />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold  mt-6" style={{color:color.h1}}>
            Welcome Back
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-center text-[17px]" style={{color:color.formParagraphColor}}>
            Sign in to continue to your{" "}
            <span className="font-semibold" style={{color:color.spanColor}}>{companyName}</span>{" "}
            dashboard
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl shadow-xl border  p-8" style={{backgroundColor:color.cardBackground , borderColor:color.formCardBorderColor}}>
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium  mb-2 block" style={{color:color.formLabelColor}}>
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2  w-5 h-5" style={{color:color.inputIconsColor}} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-xl  border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none pl-12 pr-4 text-[16px]" style={{backgroundColor:color.inputBackgroundColor}}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium  mb-2 block" style={{color:color.formLabelColor}}>
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-14 rounded-xl  border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none px-4 pr-12 text-[16px]" style={{backgroundColor:color.inputBackgroundColor}}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2  hover:text-[#042379] transition"
                  style={{color:color.inputIconsColor}}
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

                <span className="text-sm text-gray-500">Remember me</span>
              </label>

              <Link to="/forgot-password">
                <button
                  type="button"
                  className="text-sm cursor-pointer  font-medium "
                  style={{color:color.primaryColor}}
                >
                  Forgot password?
                </button>
              </Link>
            </div>

            {/* Submit */}
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full h-14 rounded-xl cursor-pointer  hover:opacity-95 transition-all  text-lg font-semibold shadow-lg  mt-2" style={{
              background: `linear-gradient(to bottom right, ${color.gradientFrom}, ${color.gradientTo})`,
              color:color.textColor ,
              boxShadow:`0 10px 25px ${color.shadowColor}`
            }}
              >
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
