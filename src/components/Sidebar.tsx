
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
  ChevronRight
} from 'lucide-react'
import SidebarItem from './SidebarItem' 
import { activePageStore } from '../store/activePageStore'

interface SidebarProps {
  isExpanded: boolean , 
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}
export default  function Sidebar ({
  isExpanded,
  setIsExpanded
}: SidebarProps)  {
 

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/', badge: null  , name:"dashboard"},
    { icon: Users, label: 'Patients', path: '/patients', badge: '12' , name:"users" },
    { icon: Calendar, label: 'Appointments', path: '/appointments', badge: null  , name:"appoitments"},
    { icon: BarChart2, label: 'Analytics', path: '/analytics', badge: null  ,name:"analytics"},
    { icon: FileText, label: 'Reports', path: '/reports', badge: '3'  ,name:"reports"},
    { icon: Mail, label: 'Messages', path: '/messages', badge: '8' , name:"messages" },
    { icon: Bell, label: 'Notifications', path: '/notifications', badge: '5' , name:"notifications" },
    { icon: Settings, label: 'Settings', path: '/settings', badge: null , name:"settings" },
  ]
 // exttract setActive page from the activePage store 
const {setActivePage} = activePageStore() 
// function to set the active page based on the name of the page
const handlePageName = (page:string)=>{
    setActivePage(page)
}

  return (
    <>
      {/* Mobile Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
    <aside
  className={`
    fixed left-0 top-0 z-50 h-screen bg-white  border-gray-200
    transition-all duration-300 ease-in-out
    flex flex-col
    ${isExpanded ? 'w-64' : 'w-20'}
    ${isExpanded ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  `}
>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {isExpanded && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[rgba(4,35,121)] to-[rgba(4,35,121)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Muhabura</h2>
                <p className="text-xs text-gray-500">Health Care</p>
              </div>
            </div>
          )}
          
          {!isExpanded && (
            <div className="w-10 h-10 bg-gradient-to-br from-[rgba(4,35,121)] to-[rgba(4,35,121)] rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-lg">M</span>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            absolute -right-3 top-20 
            w-6 h-6 bg-[rgba(4,35,121)] text-white rounded-full 
            flex items-center justify-center
            hover:bg-blue-900 cursor-pointer transition-colors
            shadow-lg
            ${!isExpanded && 'rotate-180'}
          `}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
            //   path={item.path}
            //   badge={item.badge} 
              name={item.name}
              isExpanded={isExpanded} 
              handleClick={()=>handlePageName(item.name)}
              
            />
          ))}
        </nav>

        {/* Footer - User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className={`
            flex items-center gap-3
            ${!isExpanded && 'justify-center'}
          `}>
            <div className="w-10 h-10 bg-[rgba(4,35,121)] rounded-full">
              <img 
                src="" 
                alt="" 
                className="w-full  h-full rounded-full"
              />
            </div>
            {isExpanded && (
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john@muhabura.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 right-6 lg:hidden w-14 h-14 bg-[rgba(4,35,121)] text-white rounded-full shadow-lg flex items-center justify-center z-30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  )
}

