

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../@/components/ui/chart"

export const description = "A horizontal stacked bar chart with a legend"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6",
  },
  mobile: {
    label: "Mobile",
    color: "#ef4444",
  },
}

export function ChartBarHorizontal() {
  return (
    <div className="w-full bg-white rounded-2xl mx-4 p-6 ">
         {/* Header */}
  <div className="flex flex-col gap-1 p-6 pb-2">
    <h2 className="text-lg font-semibold text-gray-900">
      Analytics Overview
    </h2>

    <p className="text-sm text-gray-500">
      Monthly performance statistics
    </p>
  </div>
      <ChartContainer
        config={chartConfig}
        className="min-h-[400px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{ left: 20 }}
        >
          <CartesianGrid horizontal={false} vertical={false} />

          {/* Numbers */}
          <XAxis type="number" hide />

          {/* Month Names */}
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />

          <ChartTooltip
            content={<ChartTooltipContent hideLabel />}
          />

          <ChartLegend
            content={<ChartLegendContent />}
          />

          <Bar
            dataKey="desktop"
            stackId="a"
            fill="var(--color-desktop)"
            radius={[4, 0, 0, 4]}
          />

          <Bar
            dataKey="mobile"
            stackId="a"
            fill="var(--color-mobile)"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}