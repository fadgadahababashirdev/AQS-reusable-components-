import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useFormColorStore } from "../store/formColorStore";
import { useCompanyInfo } from "../store/companyInformation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const companyName = useCompanyInfo(
    (state) => state.containedInfo.companyName || "AQS"
  );

  const companyLogo = useCompanyInfo(
    (state) => state.containedInfo.companyLogo || "../../favicon.svg"
  );

  const companyImage = useCompanyInfo(
    (state) => state.containedInfo.companyImage || "../../login.png"
  );

  // dynamic color variable
  const color = useFormColorStore();

  return (
    <div
      className="min-h-screen md:h-screen flex items-stretch justify-center md:p-0 p-4"
      style={{ backgroundColor: color.formBackgroundColor }}
    >
      <div
        className="w-full md:h-full rounded-3xl md:rounded-none overflow-hidden shadow-2xl border grid grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT SIDE IMAGE SECTION */}
        <div
          className="hidden md:flex relative w-full h-full items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, ${color.gradientFrom}, ${color.gradientTo})`,
          }}
        >
          {/* IMAGE */}
          <img
            src={companyImage}
            alt="Login Visual"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

         
        </div>

        {/* RIGHT SIDE LOGIN FORM */}
        <div className="flex items-center justify-center h-full p-6 sm:p-10">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              {/* Logo */}
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center"
                
              >
                <img
                  src={companyLogo}
                  alt="Logo not found"
                  className="w-9 h-9"
                />
              </div>

              {/* Title */}
              <h1
                className="text-2xl font-bold mt-6"
                style={{ color: color.h1 }}
              >
                Welcome Back
              </h1>

              {/* Subtitle */}
              <p
                className="mt-3 text-center text-[16px]"
                style={{ color: color.formParagraphColor }}
              >
                Sign in to continue to your{" "}
                <span
                  className="font-semibold"
                  style={{ color: color.spanColor }}
                >
                  {companyName}
                </span>{" "}
                dashboard
              </p>
            </div>

            {/* Form */}
            <div
              className="rounded-3xl border p-6 sm:p-8"
              style={{
                backgroundColor: color.cardBackground,
                borderColor: color.formCardBorderColor,
              }}
            >
              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    className="text-sm font-medium mb-2 block"
                    style={{ color: color.formLabelColor }}
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: color.inputIconsColor }}
                    />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-14 rounded-xl border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none pl-12 pr-4 text-[16px]"
                      style={{
                        backgroundColor: color.inputBackgroundColor,
                      }}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    className="text-sm font-medium mb-2 block"
                    style={{ color: color.formLabelColor }}
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full h-14 rounded-xl border border-transparent focus:border-[#042379] focus:bg-white transition-all outline-none px-4 pr-12 text-[16px]"
                      style={{
                        backgroundColor: color.inputBackgroundColor,
                      }}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 transition"
                      style={{ color: color.inputIconsColor }}
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
                      className="text-sm cursor-pointer font-medium"
                      style={{ color: color.primaryColor }}
                    >
                      Forgot password?
                    </button>
                  </Link>
                </div>

                {/* Submit */}
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="w-full h-14 rounded-xl cursor-pointer hover:opacity-95 transition-all text-lg font-semibold shadow-lg mt-2"
                    style={{
                      background: `linear-gradient(to bottom right, ${color.gradientFrom}, ${color.gradientTo})`,
                      color: color.textColor,
                      boxShadow: `0 10px 25px ${color.shadowColor}`,
                    }}
                  >
                    Sign In
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}