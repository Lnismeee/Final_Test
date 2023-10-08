import React, { useState } from "react";
import "../styles.css";
const Completed = () => {
    const [items, setItems] = useState([
        "Do coding challenges",
        "Do coding challenges",
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        } else {
            alert("Hãy nhập thêm chi tiết!");
        }
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className="form">
            <div className="add_detail">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add detail"
                    className="input"
                />
                <button onClick={handleAddItem} className="btn">
                    Add
                </button>
            </div>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <input type="checkbox" className="checkbox" />
                        <span className="heading">{item}</span>
                        <span
                            className="close"
                            onClick={() => handleRemoveItem(index)}
                        >
                            X
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Completed;
