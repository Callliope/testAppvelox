import React from 'react';
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Electrcard from './components/electCardBlock/Electrcard.jsx';
import Testconnect2 from './components/connect/testconnect.jsx';
import Page2list from './components/page2list/Page2list.jsx';


import { useEffect } from "react";

function App() {
  
    return (
    <>
    <Navbar />
    <Sidebar/>
    <Testconnect2/>
    
  
    <Electrcard/>
    
    </>
  );
}

export default App;
