import React, {useState , useEffect} from 'react';
import { useGlobalContext } from './context';

const Navbar = () => {
const {openSidebar, openSubmenu, closeSubmenu}  = useGlobalContext();

const displaySubmenu = (e) => {
    const page = e.target.textContent;
    // page - the clicked page name in the navbar
    const tempBtn = e.target.getBoundingClientRect();
    // gets location of the clicked button
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    // defines center/bottom location of the button 
    openSubmenu(page, {center,bottom})
    // calls openSubmenu function with the clicked element textContent as the first argument and an object with the center/bottom location of the clicked button as the second argument

}

return    (
    <header>
        <button onClick={openSidebar}>open Sidebar</button>
        <ul>
            <li>
       <button onMouseOver={displaySubmenu} onMouseLeave={closeSubmenu} className='buy'>buy</button>
       </li>
          <li>
       <button onMouseOver={displaySubmenu} onMouseLeave={closeSubmenu} className='buy'>music</button>
       </li>
          <li>
       <button onMouseOver={displaySubmenu}onMouseLeave={closeSubmenu} className='buy'>contact</button>
       </li>

        </ul>
     
    </header>
)
 
}

export default Navbar;