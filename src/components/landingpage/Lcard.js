import React from "react";
import Button from "../Button";

const Lcard = () => {
    return (
        <div>
            <div className="lcard-container" >
                <h1>Excellent Way To Best Productivity</h1>
                <p>
                    Powerful, self-served analysis to help you convert,
                    engage and retain more employees
                </p>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "35px"}}>
                    <Button
                        text={"Watch Demo"}
                        color={"#3D50C7"}
                        borderRadius={"0px"}
                        width={"170px"}
                        height={"56px"}
                        font={"18px"}
                        weight={700}
                        btcolor={"#FFFFFF"}
                        family={"'Lato', sans-serif"}
                        btheight={"24px"}
                        border={"none"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Lcard;
