import React from "react";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import Header from "../theme/Header";
const todo = () => {
    return (
        <>
            <Header></Header>
            <div className="">
                <All></All>
                <Active></Active>
                <Completed></Completed>
            </div>
        </>
    );
};

export default todo;
