import React from "react";

const Lcard3 = () => {
  return (
    <div className="lcard3">
      <div
        style={{
          minWidth: "30%",
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "54px"
        }}
      >
        <div>
          <div>
            <h2 className="main-heading">How It Works</h2>
          </div>

          <div>
            <div className="bckgd">
              <h3 className="numb">1</h3>
            </div>
            <div>
              <h3 className="sub-heading">Sign Up</h3>
            </div>
            <div>
              <p className="parag">
                Admin will create an operational account for each of the
                employees to enable timely, effective and efficient
                communication between the Admin and his employees.
              </p>
            </div>
          </div>
          <div>
            <div className="bckgd">
              <h3 className="numb">2</h3>
            </div>
            <div>
              <h3 className="sub-heading">Add Employees</h3>
            </div>
            <div>
              <p className="parag">
                Recruitment of new employees to each of the companies department
                could be done by top officers ; Admin, Managers ...
              </p>
            </div>
          </div>
          <div>
            <div className="bckgd">
              <h3 className="numb">3</h3>
            </div>
            <div>
              <h3 className="sub-heading">Generate Report</h3>
            </div>
            <div>
              <p className="parag">
                Preparation of report emanating from the organization would made
                ease; From the admins or employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lcard3;
