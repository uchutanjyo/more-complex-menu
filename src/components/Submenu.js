import React, { useEffect, useRef} from "react";
import { useGlobalContext } from "./context";
import { sublinks } from "./data";

const Sidebar = () => {
const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext()
const container = useRef(null)

useEffect(() =>  {
const submenu = container.current;
const {center, bottom} = location
submenu.style.left = `${center}px`
submenu.style.top = `${bottom}px`

},[location] )


    return (
<>
<div className={`${isSubmenuOpen ? 'submenu show-submenu ' : 'submenu'}`} ref ={container}>
<h4>{page}</h4>
{links.map((link, index)=> {
 const {url, label} = link;
   return <div>
       <a key={index} href={url}>{label}</a></div> 
})}
</div>
</>
    )
}

export default Sidebar;