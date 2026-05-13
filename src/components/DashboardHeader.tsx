import { useState, useEffect, useRef } from "react";
import { LogOut, Globe, Bell, ChevronDown } from "lucide-react";

type Language = "en" | "rw" | "fr";

const greetings: Record<Language, Record<string, string>> = {
  en: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening" },
  rw: { morning: "Mwaramutse", afternoon: "Mwiriwe", evening: "Mwiriwe" },
  fr: { morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir" },
};

const subtitles: Record<Language, string> = {
  en: "Muhabura Health Care",
  rw: "Ubuzima bwa Muhabura",
  fr: "Soins de santé Muhabura",
};

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English",      flag: "🇬🇧" },
  { code: "rw", label: "Kinyarwanda",  flag: "🇷🇼" },
  { code: "fr", label: "Français",     flag: "🇫🇷" },
];

function getTimeOfDay(): "morning" | "afternoon" | "evening" {
  const h = new Date().getHours();
  if (h < 12) return "morning";
  if (h < 17) return "afternoon";
  return "evening";
}

function formatDate(lang: Language): string {
  const locale = lang === "fr" ? "fr-FR" : lang === "rw" ? "rw-RW" : "en-GB";
  return new Date().toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface DashboardHeaderProps {
  userName?: string;
  onLogout?: () => void;
  notificationCount?: number;
}

export default function DashboardHeader({
  userName = "John",
  onLogout,
  notificationCount = 5,
}: DashboardHeaderProps) {
  const [lang, setLang] = useState<Language>("en");
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tod = getTimeOfDay();
  const greeting = `${greetings[lang][tod]}, ${userName} 👋`;
  const currentLang = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full     px-4 shadow-2xs sm:px-6 h-16 md:h-18 flex items-center justify-between">
      {/* Left — greeting */}
      <div className="flex flex-col">
        <span className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
          {greeting}
        </span>
        <span className="text-xs text-gray-500 hidden sm:block">
          {formatDate(lang)}&nbsp;·&nbsp;{subtitles[lang]}
        </span>
      </div>

      {/* Right — actions */}
      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <button
          className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          {notificationCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          )}
        </button>

        {/* Language switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setLangOpen((prev) => !prev)}
            className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors text-sm font-medium cursor-pointer"
            aria-label="Switch language"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{currentLang.label}</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>

          {langOpen && (
            <div className="absolute right-0 top-11 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[170px] overflow-hidden z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer
                    ${lang === l.code
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span className="text-base">{l.flag}</span>
                  {l.label}
                  {lang === l.code && (
                    <span className="ml-auto text-blue-600 text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block" />

        {/* Logout */}
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors text-sm font-medium cursor-pointer"
          aria-label="Log out"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Log out</span>
        </button>
      </div>
    </header>
  );
}