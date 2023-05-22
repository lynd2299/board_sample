import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Top from "./components/Top/Top";
import ThreadDetail from "./components/ThreadDetail";
import CreateThread from "./components/CreateThread";
import ContentsArea from "./components/ContentsArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-row flex-1">
          <Sidebar />
          <ContentsArea>
            <Routes>
              <Route exact path="/" element={<Top />} />
              <Route path="/threads/:id" element={<ThreadDetail />} />
              <Route path="/create-thread" element={<CreateThread />} />
            </Routes>
          </ContentsArea>
        </div>
      </div>
    </Router>
  );
};

export default App;