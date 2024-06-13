import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import GenImg from "./pages/GenImg";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/gen_images" element={<GenImg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
