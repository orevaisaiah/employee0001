import React from "react";
import Phone from "./Phone";

const Lcard4 = () => {
    return (
        <div className="lcard4">
            <div style={{width: "100%", height: "auto"}}>
                <h2
                    style={{
                        fontSize: "2.083vw",
                        fontWeight: "700",
                        fontFamily: "'Lato', sans-serif",
                        lineHeight: "3.125vh",
                        textAlign: "center",
                        color: "#060709",
                        margin: " 102px auto 16px auto",
                    }}
                >
                    Employee Side Of Things
                </h2>
            </div>
            <div style={{ width: "70%", height: "fitContent", margin: "auto" }}>
                <p
                    style={{
                        width: "41vw",
                        height: "auto",
                        fontSize: "0.833vw",
                        fontWeight: "400",
                        fontFamily: "'Lato', sans-serif",
                        lineHeight: "4.9vh",
                        textAlign: "center",
                        color: "#313335B2",
                        margin: "0px auto 24px auto",
                    }}
                >
                    Ease of receiving task from the Admins. Team members can
                    share information and experience among themselves. Also
                    there is a cordial relationship between the employees and
                    their employers. Above all, there is fairness of information
                    delivery without involment of a third party. It is a plus to
                    employees.
                </p>
            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Phone />
            </div>
        </div>
    );
};

export default Lcard4;
