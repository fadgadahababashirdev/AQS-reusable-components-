interface CardItem {
  leaderNumber: number
  leaderHeading: string
  followerNumber: number

  // Dynamic colors
  bgColor?: string
  textColor?: string
  subTextColor?: string
  graphPrimaryColor?: string
  graphSecondaryColor?: string
}

interface StatsCardInterface {
  cardsData: CardItem[]
}

export function StatsCard({ cardsData }: StatsCardInterface) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 px-4 gap-4 mt-8">
      {cardsData.map((item, index) => (
        <div
          key={index}
          className="w-full  rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          style={{
            backgroundColor: item.bgColor || "#f7f7f7",
          }}
        >
          {/* Content */}
          <div className="flex items-end justify-between">
            {/* Left text */}
            <div>
              <h1
                className="text-lg font-bold leading-none tracking-tight"
                style={{
                  color: item.textColor || "#000",
                }}
              >
                {item.leaderNumber}
              </h1>

              <p
                className="mt-3 text-[14px] font-medium"
                style={{
                  color: item.subTextColor || "#6b7280",
                }}
              >
                {item.leaderHeading}
              </p>
            </div>

            
            
          </div>
        </div>
      ))}
    </div>
  )
}