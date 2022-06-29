import React from 'react';
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Connect from "./components/Connect.jsx";
import Electrcard from './components/electCardBlock/Electrcard.jsx';
import axios from 'axios';
import { useEffect } from "react";

function App() {
  
    return (
    <>
    <Navbar/>
    <Sidebar/>
    <Connect/>
    <Electrcard/>
    </>
  );
}

export default App;
