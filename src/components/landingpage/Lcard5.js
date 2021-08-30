import React from "react";

const Lcard5 = () => {
  return (
    <div className="lcard5">
      <h2
        style={{
          fontSize: "2.083vw",
          fontWeight: "700",
          fontFamily: "'Lato', sans-serif",
          lineHeight: "4.125vh",
          textAlign: "center",
          color: "#FFFFFF",
          width: "25vw",
          margin: "52px auto 16px auto",
          paddingTop: "40px",
        }}
      >
        Join Our Mailing List
      </h2>
      <p
        style={{
          fontSize: "0.833vw",
          fontWeight: "400",
          fontFamily: "'Lato', sans-serif",
          lineHeight: "3vh",
          textAlign: "center",
          color: "#FFFFFFB2",
          width: "30vw",
          height: "6.5vh",
          margin: "0px auto 24px auto",
        }}
      >
        All required to enjoy every benefit from this organization is to have a
        functional elecrtonic mailing system to share information that concerns
        the company to increase productivityt.
      </p>
      <form style={{ display: "flex", justifyContent: "center" }} action="">
        <input id="email-field" type="email" placeholder="Enter Email" />
      </form>
    </div>
  );
};

export default Lcard5;
