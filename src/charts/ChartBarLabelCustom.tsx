
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../@/components/ui/chart"

export const description = "A bar chart with a custom label"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
    { month: "June", desktop: 214, mobile: 140 },
      { month: "June", desktop: 214, mobile: 140 },
        { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6", // blue-500
  },

  mobile: {
    label: "Mobile",
    color: "#ef4444", // red-500
  },

  label: {
    color: "#ffffff",
  },
} satisfies ChartConfig

export function ChartBarLabelCustom() {
  return (
    <div className="rounded-2xl  bg-white">
      
      {/* Header */}
      <div className="p-6 pb-0">
        <h2 className="text-lg font-semibold text-gray-900">
          Bar Chart - Custom Label
        </h2>

        <p className="text-sm text-gray-500">
          January - June 2024
        </p>
      </div>

      {/* Content */}
      <div className="">
        <div className=" p-6 w-full">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} vertical={false}/>

              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />

              <XAxis
                dataKey="desktop"
                type="number"
                hide
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              <Bar
                dataKey="desktop"
                fill="#3b82f6"
                radius={4}
              >
                <LabelList
                  dataKey="month"
                  position="insideLeft"
                  offset={8}
                  fill="#ffffff"
                  fontSize={12}
                />

                <LabelList
                  dataKey="desktop"
                  position="right"
                  offset={8}
                  fill="#111827"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      
    </div>
  )
}