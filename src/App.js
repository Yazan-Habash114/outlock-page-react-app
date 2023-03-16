import React from "react";
import LeftSide from "./Components/LeftSide/LeftSide";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{ display: 'flex' }}>
      <Sidebar/>
      <LeftSide />
      </div>
    </div>
  );
}

export default App;
