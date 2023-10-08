import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./page/All";
import Completed from "./page/Completed";
import Active from "./page/Active";
import Header from "./theme/Header";

const App = () => {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/active" element={<Active />} />
                <Route path="/completed" element={<Completed />} />
            </Routes>
        </>
    );
};

export default App;
