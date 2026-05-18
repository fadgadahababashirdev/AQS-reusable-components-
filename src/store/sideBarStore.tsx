import {create} from "zustand"
import Sidebar from "../components/Sidebar"

interface Sidebar {
    overlayColor:string 
    sideBarBg:string 
    sideBarBorderColor:string
    gradientFrom:string 
    gradientTo:string  
    textColor:string
    toggleButtonBg:string 
    userName:string 
    userEmail:string
}  
interface SidebarColors {
    colors:Sidebar
}
 
export const sideBarColorStore = create<SidebarColors> (()=>({
    colors :{
        overlayColor:"rgb(0 0 0 / 0.5)" ,
        sideBarBg:"#ffffff" ,
        sideBarBorderColor:"#e5e7eb" ,
         gradientFrom: "#042379",
         gradientTo: "#0A4DCC", 
         textColor:"#ffffff" ,
         toggleButtonBg:"rgba(4,35,121)", 
         userName:"#101828" ,
         userEmail:"#6a7282"

    }
})) 

export const useSideBarColors = ()=>{
    return  sideBarColorStore((state)=>state.colors) 
}