

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts"

const charts = [
  {
    title: "Drag Mapping",
    percentage: 90,
    color: "#3b82f6",
  },
  {
    title: "Conditional Mapping",
    percentage: 65,
    color: "#10b981",
  },
  {
    title: "Measurement Mapping",
    percentage: 45,
    color: "#f59e0b",
  },
  {
    title: "Generation Mapping",
    percentage: 100,
    color: "#ef4444",
  },
]

function ProgressChart({
  title,
  percentage,
  color,
}: {
  title: string
  percentage: number
  color: string
}) {
  const data = [
    {
      value: percentage,
      fill: color,
    },
  ]

  return (
    <div className="bg-white rounded-2xl mx-4 p-6 shadow-sm">
      <div className="relative h-[250px] w-full">
        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={90 - (percentage / 100) * 360}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />

            <RadialBar
              background
              dataKey="value"
              cornerRadius={999}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">
            {percentage}%
          </h2>

          <p className="text-sm text-gray-500 text-center px-4">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function MappingChartsGrid() {
  return (
    <div className="grid grid-cols-1 mt-4 md:grid-cols-4 gap-6">
      {charts.map((chart) => (
        <ProgressChart
          key={chart.title}
          title={chart.title}
          percentage={chart.percentage}
          color={chart.color}
        />
      ))}
    </div>
  )
}