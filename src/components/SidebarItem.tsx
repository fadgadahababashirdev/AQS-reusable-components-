
import { activePageStore } from "../store/activePageStore";
interface SideBar {
    icon:any , 
    label:any , 
    isExpanded:any , 
    handleClick:()=>void ,  
    name:string

}
const SidebarItem = ({ icon: Icon, label,  isExpanded , handleClick , name } :SideBar) => {
 const {activePage} = activePageStore() 
 const isActive = activePage === name
   
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-3 py-3 rounded-lg
        transition-all duration-200
        group relative
        ${
          isActive
            ? "bg-gray-100 text-gray-600"
            : "text-gray-700 hover:bg-gray-100 cursor-pointer"
        }
        ${!isExpanded && "justify-center"}
      `}
      onClick={()=>handleClick()}
    >
      {/* Icon */}
      <Icon
        className={`
        w-5 h-5 flex-shrink-0
        ${isActive ? "text-gray-600" : "text-gray-500 group-hover:text-gray-700"}
      `}
      />

      {/* Label */}
      {isExpanded && (
        <span className="flex-1 text-left text-sm font-medium truncate">
          {label}
        </span>
      )}
    </button>
  );
};

export default SidebarItem;
