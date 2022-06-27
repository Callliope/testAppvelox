import React from 'react';
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Connect from "./components/Connect.jsx";
import axios from 'axios';
import { useEffect } from "react";

function App() {
  
    return (
    <>
    <Navbar/>
    <Sidebar/>
    </>
  );
}
componentDidMount(
  this.readdata()
) 
function readata(){
  var self = this;
  // read data periodically
  setInterval(function() {
      axios.get("../../test-appvelox/src/data.json")
          .then(function(response) {
              var names=[];
              Object.keys(response.data).forEach(function(data) {
                   names.push(data.id);
              })
              self.setState({
                  jdata: names
              });
          })
          .catch(function(e) {
              console.log("ERROR ", e);
          })
  }, 1000);
} 
export default App;
