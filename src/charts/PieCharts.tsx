


import {

  BarChart,
  Bar,
 
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../@/components/ui/chart"

export const description = "A donut chart with text" 


   

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#3b82f6" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {

  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieDonutTextt() { 
   

  return (
    <div className="rounded-2xl  bg-white shadow-xm ">
  {/* Header */}
  <div className="flex flex-col gap-1 p-6 pb-2">
    <h2 className="text-lg font-semibold text-gray-900">
      Analytics Overview
    </h2>

    <p className="text-sm text-gray-500">
      Monthly performance statistics
    </p>
  </div>

  {/* Content */}
  <div className="p-6 pt-0">
  <ChartContainer config={chartConfig}>
  <BarChart
    accessibilityLayer
    data={chartData}
    layout="vertical"
    margin={{
      left: 10,
      right: 10,
    }}
  >
    <XAxis
      type="number"
      dataKey="visitors"
      hide
    />

    <YAxis
      dataKey="browser"
      type="category"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
    //   tickFormatter={(value) => value.slice(0, 3)}
    />

    <ChartTooltip
      cursor={false}
      content={<ChartTooltipContent hideLabel />}
    />

    <Bar
      dataKey="visitors"
      radius={5}
    />
  </BarChart>
</ChartContainer>
  </div>

  
</div>
  )
}
