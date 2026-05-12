import {create} from "zustand" 
interface ActivePage {
    activePage:string , 
    setActivePage:(page:string)=>void
}
export const activePageStore = create<ActivePage>((set)=>({
    activePage:"dashboard" , 
    setActivePage:(page) => set({activePage:page}) 
}))