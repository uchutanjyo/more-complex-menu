import React from "react";
import { useGlobalContext } from "./context";
import { sublinks } from "./data";

const Sidebar = () => {
const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return (
<>
<div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    
    {sublinks.map((item,index)=> {
        const {links, page} = item;
        return <article key={index}>
           
                <h4>{page}</h4>
        {links.map((link)=> {
            const {url, label, index} =link;
            return (
            <a key={index} href={url}>{label}</a>
                )
        })}
        </article>
    }
    )}
     <button onClick={closeSidebar}>close </button>
</div>
</>
    )
}

export default Sidebar;