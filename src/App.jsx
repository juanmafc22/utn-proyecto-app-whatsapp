import React from "react";
import { useState } from "react";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import { Route, Routes } from "react-router";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";


const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>Hola mundillo cruel</h1>} />
                <Route path="/contacto" element={<ContactScreen />} />
                <Route path="/abracadabra" element={<ChatScreen />} />
                <Route path="/carc/carc" element={<ChatScreen />} />
                <Route path="/carc/" element={<ChatScreen />} />
            </Routes>
            
        </div>
    );
}

export default App
