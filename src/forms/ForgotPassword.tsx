

import { Mail, ArrowLeft } from "lucide-react";
import { useFormColorStore } from "../store/formColorStore";
import { useCompanyInfo } from "../store/companyInformation";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  const companyName = useCompanyInfo(
    (state) => state.containedInfo.companyName || "AQS",
  );
  const companyLogo = useCompanyInfo(
    (state) => state.containedInfo.companyLogo || "../../favicon.svg",
  );

  // dynamic colors
  const color = useFormColorStore();

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
            className="w-20 h-20 rounded-3xl flex items-center justify-center"
           
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
            Forgot Password
          </h1>

          {/* Subtitle */}
          <p
            className="mt-3 text-center text-[17px] leading-relaxed"
            style={{
              color: color.formParagraphColor,
            }}
          >
            Enter the email associated with your{" "}
            <span
              className="font-semibold"
              style={{
                color: color.spanColor,
              }}
            >
              {companyName}
            </span>{" "}
            account and we’ll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <div
          className="rounded-3xl shadow-xl border p-8"
          style={{
            backgroundColor: color.cardBackground,
            borderColor: color.formCardBorderColor,
          }}
        >
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label
                className="text-sm font-medium mb-2 block"
                style={{
                  color: color.formLabelColor,
                }}
              >
                Email Address
              </label>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-xl border border-transparent transition-all outline-none px-4 pr-12 text-[16px]"
                  style={{
                    backgroundColor: color.inputBackgroundColor,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = color.primaryColor;

                    e.target.style.backgroundColor = color.cardBackground;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "transparent";

                    e.target.style.backgroundColor = color.inputBackgroundColor;
                  }}
                />

                <Mail
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{
                    color: color.inputIconsColor,
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <button 

              type="submit"
              className="w-full h-14 rounded-xl cursor-pointer hover:opacity-95 transition-all text-lg font-semibold shadow-lg"
              style={{
                background: `linear-gradient(to right, ${color.gradientFrom}, ${color.gradientTo})`,
                color: color.lockKeyHoleColor,
                boxShadow: `0 10px 25px ${color.shadowColor}`,
              }}
            >
              Send Reset Link
            </button>

            {/* Back to login */}
          <Link to="/">
            <button 
             
              type="button"
              className="w-full flex items-center justify-center gap-2 text-sm font-medium transition hover:opacity-80"
              style={{
                color: color.formParagraphColor,
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
