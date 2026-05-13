import { useState } from "react";
import Sidebar from "../../components/Sidebar"
import { activePageStore } from "../../store/activePageStore";
import DashboardHeader from "../../components/DashboardHeader"
import Appointment from "../Appoitments/Appointment"
import Patient from "../patients/Patient"
import { TypographyH1 } from "../../../@/components/ui/typography";


export default function Dashboard() {
  const activePage = activePageStore((state) => state.activePage);
 
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
    
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}  />
   

      {/* Main Content */}
      <main
        className={`
          transition-all duration-300 p-1 pt-0
          ${isExpanded ? "lg:ml-64" : "lg:ml-20"}
        `}
      >
        <DashboardHeader/>
   
        <div className="max-w-full mx-auto">
          {
            activePage === "dashboard" ? (<TypographyH1>Dashboard</TypographyH1>)
            :activePage === "appoitments" ? <Appointment/> : <Patient/>
          }

          
        </div>
      </main>
    </div>
  );
}


