import React from "react";

const Header = ({ onClickLn, onClickSn }) => {
    return (
        <div className="header-container container-fluiod">
            <div className="header-container1">
                <p className="header-p">ems board</p>
            </div>
            <div className="header-container2">
                <div style={{ marginRight: "40px" }}>
                    <button onClick={onClickLn}
                        style={{
                            backgroundColor: "#fdfafa",
                            width: "110px",
                            height: "56px",
                            color: "#3D50C7",
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "16px",
                            fontWeight: "700",
                            border: "none"
                        }}
                    >
                        Login
                    </button>
                </div>
                <div>
                     <button onClick={onClickSn}
                        style={{
                            backgroundColor: "#3D50C7",
                            width: "110px",
                            height: "56px",
                            color: "white",
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "16px",
                            fontWeight: "700",
                            border: "none"
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
