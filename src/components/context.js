
import React, {useState, useContext} from 'react'
import {sublinks} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
        const [isSidebarOpen, setIsSidebarOpen] = useState(false)
        const [location, setLocation] = useState({})
        const [page, setPage] = useState({page:'', links:[]})

    const openSubmenu = (text,coordinates)=> {
        const page = sublinks.find((link) => link.page === text)
        console.log(page)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true); 
        console.log(isSubmenuOpen)
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