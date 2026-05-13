import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { activePageStore } from "../../store/activePageStore";
import DashboardHeader from "../../components/DashboardHeader";
import Appointment from "../Appoitments/Appointment";
import Patient from "../patients/Patient";
import { TypographyH1 } from "../../../@/components/ui/typography";
import { StatsCard } from "../../../@/components/ui/statsCard";
import { Users, Briefcase, ShoppingCart } from "lucide-react";
import { ChartBarMultiple } from "../../components/charts/MultipleCharts";

// stats card hard coded data 
const cardsData = [
  {
   
    leaderNumber: 2817,
    leaderHeading: "Total Users",
    followerNumber: 32,
    icon: <Users/>, 
    
  },
  {
   
    leaderNumber: 1450,
    leaderHeading: "Active Clients",
    followerNumber: 18,
    icon: <Briefcase/>,
  },
  {
    
    leaderNumber: 982,
    leaderHeading: "Completed Orders",
    followerNumber: 12,
    icon: <ShoppingCart/>,
  },
   {
   
    leaderNumber: 2817,
    leaderHeading: "Total Users",
    followerNumber: 32,
    icon: <Users/>, 
    
  },
   {
   
    leaderNumber: 2817,
    leaderHeading: "Total Users",
    followerNumber: 32,
    icon: <Users/>, 
    
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
             <div className="grid grid-cols-1 md:grid-cols-3">
               <ChartBarMultiple/>
              <ChartBarMultiple/>
              <ChartBarMultiple/>
             </div>
               
              
            </div>
          ) : activePage === "appoitments" ? (
            <Appointment />
          ) : (
            <Patient />
          )}
        </div>
      </main>
    </div>
  );
}
