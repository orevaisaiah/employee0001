import React from "react";
import Icon1 from "./Icon1";
import Icon2 from "./Icon2";
import Icon3 from "./Icon3";

const Lcard2 = () => {
    return (
        <div style={{ width: "100%" }}>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        marginRight: "auto",
                        marginLeft: "auto",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2.06vw",
                            lineHeight: "3.124vh",
                            fontWeight: "700",
                            fontFamily: "'Lato', sans-serif",
                            textAlign: "center",
                            marginTop: "120px"
                        }}
                    >
                        Features of EMS
                    </h2>
                </div>
                <div className="lcard2-container">
                    <div className="Lcard-section">
                        <div>
                            <Icon1 />
                        </div>
                        <div>
                            <h3 className="h3-heading">Easy Task Generation</h3>
                        </div>
                        <div >
                            <p className="lcard2-p">
                                Task management software helps to overcome task
                                prioritazation issues so that important task can
                                be done on time.
                            </p>
                        </div>
                    </div>
                    <div className="Lcard-section">
                        <div>
                            <Icon2 />
                        </div>
                        <div>
                            <h3 className="h3-heading">Manage Attendance</h3>
                        </div>
                        <div >
                            <p className="lcard2-p">
                                Employers can monitor their work team with the
                                aid of the web based software to rate their
                                commitment to work.
                            </p>
                        </div>
                    </div>
                    <div className="Lcard-section">
                        <div>
                            <Icon3 />
                        </div>
                        <div>
                            <h3 className="h3-heading">Easy Payment Process</h3>
                        </div>
                        <div >
                            <p className="lcard2-p">
                                Workers can get details of payment of their
                                salaries through the database software for each
                                work schedule payment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lcard2;
