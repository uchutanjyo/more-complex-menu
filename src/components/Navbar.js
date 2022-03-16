import React, {useState , useEffect} from 'react';
import { useGlobalContext } from './context';

const Navbar = () => {
const {openSidebar, openSubmenu, closeSubmenu}  = useGlobalContext();

const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center,bottom})
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
        <button>SIGN IN</button>
    </header>
)
 
}

export default Navbar;