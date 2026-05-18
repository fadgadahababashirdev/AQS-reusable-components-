// components/profile/ProfileSettings.tsx

import { useState } from "react";
import { useFormColorStore } from "../../store/formColorStore";

interface EmailAddress {
  email: string;
  addedAt: string;
  primary?: boolean;
}

interface SelectOption {
  label: string;
  value: string;
}

interface ProfileSettingsProps {
  fullName?: string;
  nickName?: string;
  email?: string;
  gender?: string;
  country?: string;
  language?: string;
  timezone?: string;
  avatarUrl?: string;
  emailAddresses?: EmailAddress[];
  genders?: SelectOption[];
  countries?: SelectOption[];
  languages?: SelectOption[];
  timezones?: SelectOption[];
  onEdit?: () => void;
  onAddEmail?: () => void;
}

const DEFAULT_GENDERS: SelectOption[] = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Other", value: "other" },
];

const DEFAULT_COUNTRIES: SelectOption[] = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
];

const DEFAULT_LANGUAGES: SelectOption[] = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "es" },
  { label: "German", value: "de" },
];

const DEFAULT_TIMEZONES: SelectOption[] = [
  { label: "Eastern Time (ET)", value: "et" },
  { label: "Central Time (CT)", value: "ct" },
  { label: "Pacific Time (PT)", value: "pt" },
  { label: "UTC", value: "utc" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({
  name,
  avatarUrl,
}: {
  name: string;
  avatarUrl?: string;
}) {
  const [imgError, setImgError] = useState(false);
const colors = useFormColorStore()
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: colors.primaryColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        fontWeight: 500,
        color: "#fff",
        flexShrink: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {avatarUrl && !imgError ? (
        <img
          src={avatarUrl}
          alt={name}
          onError={() => setImgError(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: "block",
        fontSize: 11,
        fontWeight: 500,
        color: "var(--color-text-secondary, #888)",
        marginBottom: 6,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  fontSize: 14,
  color: "var(--color-text-secondary, #888)",
  background: "var(--color-background-secondary, #f5f5f5)",
  border: "none",
  borderRadius: 8,
  outline: "none",
  fontFamily: "inherit",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  cursor: "pointer",
  paddingRight: 36,
};

function SelectField({
  value,
  options,
  placeholder,
  onChange,
}: {
  value?: string;
  options: SelectOption[];
  placeholder?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div style={{ position: "relative" }}>
      <select
        style={selectStyle}
        defaultValue={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {/* Chevron icon */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          color: "var(--color-text-secondary, #888)",
        }}
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

function MailIcon({ color = "#378ADD" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      aria-hidden="true"
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: 5 }}
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "0.5px solid var(--color-border-tertiary, #e8e8e8)",
  margin: "1.75rem 0",
};

export default function ProfileSettings({
  fullName = "Alexa Rawles",
  nickName = "Alexa",
  email = "alexarawles@gmail.com",
  gender = "female",
  country = "us",
  language = "en",
  timezone = "et",
  avatarUrl,
  emailAddresses = [
    { email: "alexarawles@gmail.com", addedAt: "1 month ago", primary: true },
    { email: "alexa.r@work.com", addedAt: "2 weeks ago" },
  ],
  genders = DEFAULT_GENDERS,
  countries = DEFAULT_COUNTRIES,
  languages = DEFAULT_LANGUAGES,
  timezones = DEFAULT_TIMEZONES,
  onEdit,
  onAddEmail,
}: ProfileSettingsProps) { 
    const colors = useFormColorStore()
  return (
    <div 
    className="mt-6 w-full px-4"
      style={{
        width: "100%",
        background: "var(--color-background-primary, #fff)",
    
        borderRadius: 16,
        padding: "2rem",
        fontFamily: "inherit",
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Avatar name={fullName} avatarUrl={avatarUrl} />
          <div>
            <p
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: "var(--color-text-primary, #111)",
                margin: 0,
              }}
            >
              {fullName}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "var(--color-text-secondary, #888)",
                marginTop: 2,
              }}
            >
              {email}
            </p>
          </div>
        </div>

        <button
          onClick={onEdit}
          style={{
            background:colors.primaryColor,
            color:colors.textColor,
            border: "none",
            borderRadius: 8,
            padding: "8px 22px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          <EditIcon />
          Edit
        </button>
      </div>

      <hr style={dividerStyle} />

      {/* ── FORM GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1.25rem 1.5rem",
        }}
      >
        {/* Full Name */}
        <div>
          <FieldLabel>Full Name</FieldLabel>
          <input
            style={inputStyle}
            type="text"
            defaultValue={fullName}
            placeholder="Your Full Name"
            readOnly
          />
        </div>

        {/* Nick Name */}
        <div>
          <FieldLabel>Nick Name</FieldLabel>
          <input
            style={inputStyle}
            type="text"
            defaultValue={nickName}
            placeholder="Your Nick Name"
            readOnly
          />
        </div>

        {/* Gender */}
        <div>
          <FieldLabel>Gender</FieldLabel>
          <SelectField
            value={gender}
            options={genders}
            placeholder="Select gender"
          />
        </div>

        {/* Country */}
        <div>
          <FieldLabel>Country</FieldLabel>
          <SelectField
            value={country}
            options={countries}
            placeholder="Select country"
          />
        </div>

        {/* Language */}
        <div>
          <FieldLabel>Language</FieldLabel>
          <SelectField
            value={language}
            options={languages}
            placeholder="Select language"
          />
        </div>

        {/* Time Zone */}
        <div>
          <FieldLabel>Time Zone</FieldLabel>
          <SelectField
            value={timezone}
            options={timezones}
            placeholder="Select timezone"
          />
        </div>
      </div>

      <hr style={dividerStyle} />

      {/* ── EMAIL SECTION ── */}
      <div>
        <p
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "var(--color-text-primary, #111)",
            marginBottom: "1rem",
          }}
        >
          My email address
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {emailAddresses.map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}
            >
              {/* Icon bubble */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: item.primary
                    ? "var(--color-background-info, #e6f1fb)"
                    : "var(--color-background-secondary, #f5f5f5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MailIcon color={item.primary ? "#185fa5" : "#888"} />
              </div>

              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--color-text-primary, #111)",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {item.email}
                  {item.primary && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        padding: "2px 8px",
                        borderRadius: 99,
                        background: "var(--color-background-success, #eaf3de)",
                        color: "var(--color-text-success, #3b6d11)",
                      }}
                    >
                      Primary
                    </span>
                  )}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-secondary, #888)",
                    marginTop: 2,
                  }}
                >
                  {item.addedAt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onAddEmail}
          style={{
            marginTop: "1.25rem",
            background: "var(--color-background-secondary, #f5f5f5)",
            border: "0.5px solid var(--color-border-secondary, #ccc)",
            borderRadius: 8,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--color-text-primary, #111)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>+</span>
          Add email address
        </button>
      </div>
    </div>
  );
}
