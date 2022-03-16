import React, { useEffect, useRef} from "react";
import { useGlobalContext } from "./context";

const Sidebar = () => {
const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext()
const container = useRef(null)
// defines 'container' as a reference to nothing, for the time being

useEffect(() =>  {
const submenu = container.current;
// defines 'submenu' as the div referenced in the return statement
const {center, bottom} = location
// destructures an object called 'location' - two properties 
submenu.style.left = `${center}px`
submenu.style.top = `${bottom}px`
// takes the actual location of the submenu and sets them to the properties of the'location' object.
submenu.style.color = 'black'

},[location] )
// every time the location objet changes (different properties of left/top set), the render location of submenu changes (rerenders)


    return (
<>
<div className={`${isSubmenuOpen ? 'submenu show-submenu ' : 'submenu'}`} ref ={container}>
    {/* ref - sets this div (the submenu) as the reference to container variable */}
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