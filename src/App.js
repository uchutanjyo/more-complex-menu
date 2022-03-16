import React, {useState , useEffect} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'
import Navbar from './components/Navbar'



function App() {


return (
    <>  
<Navbar></Navbar>
<Sidebar></Sidebar>
  <Submenu></Submenu>
 
 <footer>
   <h1>more complex menu</h1>
   <div>this continues my attempts to make barebones versions of projects from John Smilga's React Tutorial with little to no help/reference and other places - stricly for coding practice/learning concepts. if anyone sees these, please disregard the styling/formatting etc. :) </div>
  <div>this one was more difficult for me to code on my own, as i was unfamiliar with several things John did in the tutorial video. I will be revisiting this soon - will try to do it on my own now that i've seen it done. </div>
  </footer>

    
</>
)}
  


export default App;
