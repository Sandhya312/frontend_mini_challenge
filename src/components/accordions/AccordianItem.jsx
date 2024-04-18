/* eslint-disable react/prop-types */
"use strict";

import { useState } from "react";

function AccordianItem({ index, item }) {
    const [isOpen, setIsOpen] = useState(false);

    const accordionHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            key={index}
            style={{
                background: "green",
                height: "auto",
                width: "70rem",
                margin: "0.5rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem",
                    alignItems: "center",
                }}
            >
                {item.title}
                <button
                    onClick={() => {
                        accordionHandler();
                    }}
                >
                    ➕
                </button>
            </div>
            <div
                style={{
                    background: "green",
                    display: isOpen ? "block" : "none",
                }}
            >
                {item.description}
            </div>
        </div>
    );
}

export default AccordianItem;