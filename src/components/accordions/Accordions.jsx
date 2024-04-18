
import { useState } from "react"
import AccordianItem from "./AccordianItem";

const responseObj = Array(3).fill().map((_, index) => ({
    title: `Title ${index + 1}`,
    description: `This is a longer description for item ${index + 1}. It contains more information about the item and can span multiple lines. You can customize it as needed for your application.`
}));

const Accordions = () => {

    const [isMultipleAllowed, setIsMultipleAllowed] = useState(false);

    const [openAccordions, setOpenAccordions] = useState([]);

    const multipleAllowHandler = (e) => {
        setIsMultipleAllowed(e.target.checked);
    }

    const accordionHandler = (index) => {
        if (!openAccordions.includes(index)) {
            // if already open
            setOpenAccordions((prev) => {
                return isMultipleAllowed ? [...prev, index] : [index];
            });
        }
        else {
            setOpenAccordions((prev) => {
                return prev.filter((item) => item !== index);
            });
        }
    }

    return (
        <>
            <div style={{
                background: "red",
                padding: "0.5rem",
                width: "auto",
                height: "auto"

            }}>
                <label htmlFor="">Is multiple open accordion allowed</label>
                <input type="checkbox" name="open" checked={isMultipleAllowed} onChange={multipleAllowHandler} id="" />
                <button
                    onClick = {() => {
                        setOpenAccordions([]);
                    }}
                >
                    collapse all
                </button>
                {
                    Array(3).fill().map((_, index) => {
                        return (
                            <AccordianItem
                                key={index}
                                index={index}
                                item={responseObj[index]}
                                isOpen={openAccordions.includes(index)}
                                accordionHandler={accordionHandler}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Accordions;