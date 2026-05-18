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
import ProfileSettings from "../Profile/ProfilePage";





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
// sample-data/profile-data.ts

export const profileData = {
  fullName: "Alexa Rawles",
  nickName: "Alexa",
  email: "alexarawles@gmail.com",

  gender: "female",
  country: "rwanda",
  language: "english",
  timezone: "cat",

  emailAddresses: [
    {
      email: "alexarawles@gmail.com",
      addedAt: "1 month ago",
    },
    {
      email: "alexa.work@gmail.com",
      addedAt: "2 weeks ago",
    },
  ],

  genders: [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ],

  countries: [
    {
      label: "Rwanda",
      value: "rwanda",
    },
    {
      label: "Kenya",
      value: "kenya",
    },
    {
      label: "Uganda",
      value: "uganda",
    },
    {
      label: "Tanzania",
      value: "tanzania",
    },
  ],

  languages: [
    {
      label: "English",
      value: "english",
    },
    {
      label: "French",
      value: "french",
    },
    {
      label: "Kinyarwanda",
      value: "kinyarwanda",
    },
  ],

  timezones: [
    {
      label: "CAT (Central Africa Time)",
      value: "cat",
    },
    {
      label: "GMT (Greenwich Mean Time)",
      value: "gmt",
    },
    {
      label: "EAT (East Africa Time)",
      value: "eat",
    },
  ],

  onEdit: () => {
    console.log("Edit profile clicked")
  },
}
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
          ) :  activePage === "profile" ? (
             <ProfileSettings {...profileData} />
          ) :(
            <Users />
          )}
        </div>
      </main>
    </div>
  );
}
