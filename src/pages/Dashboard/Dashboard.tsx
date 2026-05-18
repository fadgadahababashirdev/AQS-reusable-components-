import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { activePageStore } from "../../store/activePageStore";
import DashboardHeader from "../../components/DashboardHeader";
import Appointment from "../Appoitments/Appointment";
import Users from "../users/Users";
import { TypographyH1 } from "../../../@/components/ui/typography";
import { StatsCard } from "../../../@/components/ui/statsCard";
import { ChartPieDonutTextt } from "../../charts/PieCharts";
import { ChartBarLabelCustom } from "../../charts/ChartBarLabelCustom"; 
import {ChartBarHorizontal} from "../../charts/ChartBarHorizantal"
 import MappingChartsGrid from "../../charts/ChartPieDonutText";





// stats card hard coded data 
const cardsData = [
 
  {
   
    leaderNumber: 2817,
    leaderHeading: "Total Users",
    followerNumber: 32,
   
    
   
    
  },
  {
   
    leaderNumber: 1450,
    leaderHeading: "Active Clients",
    followerNumber: 18,
  
  },
  {
    
    leaderNumber: 982,
    leaderHeading: "Completed Orders",
    followerNumber: 12,
   
  },
   {
   
    leaderNumber: 2817,
    leaderHeading: "Total Users",
    followerNumber: 32,
  
    
  },
   {
   
    leaderNumber: 2817,
    leaderHeading: "Total Users",
    followerNumber: 32,
  
    
  },
];
export default function Dashboard() {
  const activePage = activePageStore((state) => state.activePage);


  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}

      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
      <main
        className={`
          transition-all duration-300 p-1 pt-0
          ${isExpanded ? "lg:ml-64" : "lg:ml-20"}
        `}
      >
        <DashboardHeader />

        <div className="max-w-full mx-auto">
          {activePage === "dashboard" ? (
            <div>
              <TypographyH1>Dashboard</TypographyH1>
              <StatsCard cardsData={cardsData}/> 
              <div className="grid mx-4 mt-6  gap-3 grid-cols-1 md:grid-cols-3">
               {/* this is the charts section  */}
               
              
                  <ChartPieDonutTextt/> 
                <ChartBarLabelCustom/> 
                <ChartBarHorizontal/>
                 
              
               
               
              </div>
              {/* four charts */} 
               <MappingChartsGrid/>
              
            </div>
          ) : activePage === "appoitments" ? (
            <Appointment />
          ) : (
            <Users />
          )}
        </div>
      </main>
    </div>
  );
}
