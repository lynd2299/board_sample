import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainFrame from "./components/MainFrame";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <MainFrame />
      </div>
    </div>
  );
};

export default App;