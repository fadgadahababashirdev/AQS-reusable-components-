import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { activePageStore } from "./store/activePageStore";
import DashboardHeader from "./components/DashboardHeader";


function App() {
  const activePage = activePageStore((state) => state.activePage);
 
  const [isExpanded, setIsExpanded] = useState(true);
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
            activePage === "dashboard" ? (<h1 className=" text-lg md:text-3xl  font-bold text-gray-900 mb-4 p-4 ">Dashboard</h1>)
            :(<h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-4 p-4">{activePage.toLocaleUpperCase()}</h1>)
          }

          
        </div>
      </main>
    </div>
  );
}

export default App;
