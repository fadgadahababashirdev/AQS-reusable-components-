

import { useState } from "react";
import { ChevronDown } from "lucide-react";


import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const yearlyData: any = {
  2024: [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ],

  2025: [
    { month: "January", desktop: 120, mobile: 60 },
    { month: "February", desktop: 280, mobile: 180 },
    { month: "March", desktop: 190, mobile: 90 },
    { month: "April", desktop: 260, mobile: 170 },
    { month: "May", desktop: 320, mobile: 220 },
    { month: "June", desktop: 290, mobile: 200 },
  ],
};

export function ChartBarMultiple() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 mx-4 rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      {/* Top */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-bold text-[rgba(4,35,121)]">
            Analytics Overview
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            January - June {selectedYear}
          </p>
        </div>

        {/* Custom Year Selector */}
        <div className="relative w-[130px]">
          {/* Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="
      flex h-11 w-full items-center justify-between
      rounded-xl border border-gray-200
      bg-white px-4
      text-sm font-semibold text-[rgba(4,35,121)]
      transition-all duration-200
      hover:border-[rgba(4,35,121)]
      focus:outline-none focus:ring-4
      focus:ring-[rgba(4,35,121,0.08)]
    "
          >
            {selectedYear}

            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {open && (
            <div
              className="
        absolute right-0 z-50 mt-2 w-full overflow-hidden
        rounded-xl border border-gray-100
        bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
            >
              {Object.keys(yearlyData).map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setOpen(false);
                  }}
                  className={`
            flex w-full items-center px-4 py-3
            text-left text-sm font-medium
            transition-all duration-150
            hover:bg-[rgba(4,35,121,0.06)]
            ${
              selectedYear === year
                ? "bg-[rgba(4,35,121,0.08)] text-[rgba(4,35,121)]"
                : "text-gray-600"
            }
          `}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={yearlyData[selectedYear]}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              horizontal={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-sm"
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.03)" }}
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="desktop"
              name="Desktop Users"
              fill="rgba(4,35,121)"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="mobile"
              name="Mobile Users"
              fill="#5b5fef"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
