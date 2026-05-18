import {
  Home,
  Users,
  Calendar,
  FileText,
  Settings,
  Bell,
  BarChart2,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { activePageStore } from "../store/activePageStore";
import { useSideBarColors } from "../store/sideBarStore";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Sidebar({ isExpanded, setIsExpanded }: SidebarProps) {
  const menuItems = [
    {
      icon: Home,
      label: "Dashboard",
      path: "/",
      badge: null,
      name: "dashboard",
    },
    {
      icon: Users,
      label: "Users",
      path: "/users",
      badge: "12",
      name: "users",
    },
    {
      icon: Calendar,
      label: "Appointments",
      path: "/appointments",
      badge: null,
      name: "appoitments",
    },
    {
      icon: BarChart2,
      label: "Analytics",
      path: "/analytics",
      badge: null,
      name: "analytics",
    },
    {
      icon: FileText,
      label: "Reports",
      path: "/reports",
      badge: "3",
      name: "reports",
    },
    {
      icon: Mail,
      label: "Messages",
      path: "/messages",
      badge: "8",
      name: "messages",
    },
    {
      icon: Bell,
      label: "Notifications",
      path: "/notifications",
      badge: "5",
      name: "notifications",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
      badge: null,
      name: "settings",
    },
  ];

  // colors
  const colors = useSideBarColors();
  // exttract setActive page from the activePage store
  const { setActivePage } = activePageStore();
  // function to set the active page based on the name of the page
  const handlePageName = (page: string) => {
    setActivePage(page);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: colors.overlayColor }}
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed left-0 top-0 z-50 h-screen   border-r 
    
    transition-all duration-300 ease-in-out
    flex flex-col
    ${isExpanded ? "w-64" : "w-20"}
    ${isExpanded ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 

  `}
        style={{
          backgroundColor: colors.sideBarBg,
          borderColor: colors.sideBarBorderColor,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b "
          style={{ borderColor: colors.sideBarBorderColor }}
        >
          {isExpanded && (
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10  rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(to bottom right, ${colors.gradientFrom}, ${colors.gradientTo})`,
                  color: colors.textColor,
                }}
              >
                <span
                  className="font-bold text-lg"
                  style={{ color: colors.textColor }}
                >
                  M
                </span>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Muhabura</h2>
                <p className="text-xs text-gray-500">Health Care</p>
              </div>
            </div>
          )}

          {!isExpanded && (
            <div className="w-10 h-10  rounded-lg flex items-center justify-center mx-auto"  style={{
                  background: `linear-gradient(to bottom right, ${colors.gradientFrom}, ${colors.gradientTo})`,
                  color: colors.textColor,
                }}>
              <span className=" font-bold text-lg">M</span>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            absolute -right-3 top-20 
            w-6 h-6  rounded-full 
            flex items-center justify-center
            hover:bg-blue-900 cursor-pointer transition-colors
            shadow-lg
            ${!isExpanded && "rotate-180"}
          `} 
          style={{backgroundColor:colors.toggleButtonBg , color:colors.textColor}}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Menu Items */}
        <nav className="flex-1  overflow-y-auto p-4 space-y-1">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              //   path={item.path}
              //   badge={item.badge}
              name={item.name}
              isExpanded={isExpanded}
              handleClick={() => handlePageName(item.name)}
            />
          ))}
        </nav>

        {/* Footer - User Profile */}
        <div className="border-t p-4" style={{borderColor:colors.sideBarBorderColor}}>
          <div
            className={`
            flex items-center gap-3
            ${!isExpanded && "justify-center"}
          `}
          >
            <div className="w-10 h-10 rounded-full" style={{backgroundColor:colors.toggleButtonBg}}>
              <img src="" alt="" className="w-full  h-full rounded-full" />
            </div>
            {isExpanded && (
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate" style={{color:colors.userName}}>
                  John Doe
                </p>
                <p className="text-xs text-gray-500 truncate" style={{color:colors.userName}}>
                  john@muhabura.com
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 right-6 lg:hidden w-14 h-14  rounded-full shadow-lg flex items-center justify-center z-30"
        style={{backgroundColor:colors.toggleButtonBg , color:colors.textColor}}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}
