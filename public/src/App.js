import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Chat from "./Pages/Chat";
import SetAvatar from "./Pages/SetAvatar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setavatar" element={<SetAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
