interface CardItem {
    icon:any , 
    leaderNumber:number , 
    leaderHeading:string , 
    followerNumber:number , 

   
} 
interface StatsCardInterface{
    cardsData:CardItem[]
}

export  function StatsCard({cardsData}:StatsCardInterface) {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 px-4   gap-4 mt-8">
   {
    cardsData.map((item:any , index:any)=>(
 <div className="w-full  mt-12 rounded-[24px] bg-[#f7f7f7] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden" key={index}>
      
      {/* Top */}
      <div className="flex items-start justify-between">
        
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(4,35,121)] to-[rgba(4,35,121)] shadow-[0_8px_20px_rgba(124,92,252,0.35)]">
          <div
          
            className="h-6 w-6 text-white"
          > 
          {item.icon}
          </div>
         
        </div>

        {/* Dots */}
        {/* <button className="flex flex-col gap-[3px] pt-2">
          <span className="h-[4px] w-[4px] rounded-full bg-gray-400"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-gray-400"></span>
          <span className="h-[4px] w-[4px] rounded-full bg-gray-400"></span>
        </button> */}
      </div>

      {/* Content */}
      <div className="mt-12 flex items-end justify-between">
        
        {/* Left text */}
        <div>
          <h1 className="text-lg font-bold leading-none tracking-tight text-black">
            {item.leaderNumber}
          </h1>

          <p className="mt-3 text-[14px] font-medium text-gray-500">
             {item.leaderHeading}
          </p>
        </div>

        {/* Right graph */}
        <div className="relative flex flex-col items-end">
          
          {/* SVG graph */}
          <svg
            width="120"
            height="70"
            viewBox="0 0 120 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-12 right-0"
          >
            {/* Purple line */}
            <path
              d="M2 55 
                 C 15 5, 40 5, 55 30 
                 S 90 55, 100 20"
              stroke="#5B5FEF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Gray line */}
            <path
              d="M70 25 
                 C 82 5, 105 5, 118 18"
              stroke="#CFCFD4"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <span className="text-lg font-semibold text-[rgba(4,35,121)]">
            {item.followerNumber}
          </span>
        </div>
      </div>
    </div>
    ))
   }
   </div>
  )
}