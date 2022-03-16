
import React, {useState, useContext} from 'react'
import {sublinks} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
        const [isSidebarOpen, setIsSidebarOpen] = useState(false)
        const [location, setLocation] = useState({})
        const [page, setPage] = useState({page:'', links:[]})

    const openSubmenu = (text,coordinates)=> {
        // text - will pass in 'page'; coordinates - will pass in 'center, bottom' object properties  both from displaySubmenu in Navbar component (this function will be accessible with ContextAPI)
        const page = sublinks.find((link) => link.page === text)
        // finds the 'link' property in the sublinks object which is the same as the clicked element on the navbar (text- 'page' variable)
        setPage(page)
        // sets page state to the found property 
        setLocation(coordinates)
        // sets location state to coordinates - {center, bottom} object in Navbar
        setIsSubmenuOpen(true); 
        // sets isSubMenuOpen state to true
    }
    const closeSubmenu = ()=> {
        setIsSubmenuOpen(false)
    ; 
}
    const openSidebar = ()=> {
        setIsSidebarOpen(true); 
}
    const closeSidebar = ()=> {
        setIsSidebarOpen(false); 
}
    

    return<>
    <AppContext.Provider value={{location, page, isSubmenuOpen, openSubmenu,closeSubmenu, isSidebarOpen, closeSidebar, openSidebar}}> {children}
    </AppContext.Provider>
    </>
}

export const useGlobalContext = () => {
return useContext(AppContext)
}

export {AppContext, AppProvider}