import type { User } from "./column";
import { columns } from "./column";

import { DataTable } from "../../table/dataTable";
import { ShoppingCart, Users } from "lucide-react";
import { StatsCard } from "../../../../@/components/ui/statsCard";

function getData(): User[] {
  return [
    {
      id: "728ed52f",
      firstName: "John",
      LastName: "Ntwari",
      status: "pending",
      email: "john@example.com",
    },
    {
      id: "489e1d42",
      firstName: "Alice",
      LastName: "Mugabo",
      status: "approved",
      email: "alice@example.com",
    },
    {
      id: "f93jd821",
      firstName: "Kevin",
      LastName: "Iradukunda",
      status: "active",
      email: "kevin@example.com",
    },
    {
      id: "j29sk221",
      firstName: "Sarah",
      LastName: "Uwase",
      status: "inactive",
      email: "sarah@example.com",
    },
  ];
}  


// cards data 
const cardsData = [
  {
    leaderNumber: 1200,
    leaderHeading: " Total Users",
    bgColor: "#ffffff",
    textColor: "#312E81",
    subTextColor: "#6366F1",
    graphPrimaryColor: "#4F46E5",
    graphSecondaryColor: "#C7D2FE",
    icon: <Users size={20} />,
  },
  {
    leaderNumber: 340,
    leaderHeading: "Active users",
    bgColor: "#ffffff",
    textColor: "#065F46",
    subTextColor: "#10B981",
    graphPrimaryColor: "#059669",
    graphSecondaryColor: "#A7F3D0",
    icon: <ShoppingCart size={20} />,
  }, 
   {
    leaderNumber: 340,
    leaderHeading: "Inactive users",
    bgColor: "#ffffff",
    textColor: "#065F46",
    subTextColor: "#10B981",
    graphPrimaryColor: "#059669",
    graphSecondaryColor: "#A7F3D0",
    icon: <ShoppingCart size={20} />,
  }, 
   {
    leaderNumber: 340,
    leaderHeading: "pending",
    bgColor: "#ffffff",
    textColor: "#065F46",
    subTextColor: "#10B981",
    graphPrimaryColor: "#059669",
    graphSecondaryColor: "#A7F3D0",
    icon: <ShoppingCart size={20} />,
  }, 
  {
    leaderNumber: 340,
    leaderHeading: "rejected ",
    bgColor: "#ffffff",
    textColor: "red",
    subTextColor: "#10B981",
    graphPrimaryColor: "#059669",
    graphSecondaryColor: "#A7F3D0",
    icon: <ShoppingCart size={20} />,
  },
]

export default function UserTable() {
  const data = getData();

  return (
    <div className="  px-4 py-10"> 
    <StatsCard cardsData={cardsData}/>
     <div className="mt-10"> <DataTable columns={columns} data={data} searchKeys={["firstName" , "LastName" , "email" , "status"]}/></div>
    </div>
  );
}