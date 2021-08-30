import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignupForm = () => {
  const companyType = [
    "Agriculture",
    "Aerospace",
    "Education",
    "Construction",
    "Telecommunication",
    "Transport",
    "Health care",
    "Hospitality",
    "Pharmaceutical",
    "Food",
    "Entertainment",
    "News Media",
    "Energy",
    "Manufacturing",
    "Mining",
  ];

  const validationSchema = Yup.object().shape({
    companyType: Yup.string()
      .required(
        "Please Select your category of company from the listed options"
      )
      .oneOf(companyType),
    companyname: Yup.string().required("Plase enter the name of your company"),
    logoimage: Yup.mixed().required("Please upload your company logo"),
    firstname: Yup.string().required("Please enter your Firstname"),
    lastname: Yup.string().required("Please enter your Lastname"),
    email: Yup.string()
      .email("Email entered is invalid")
      .required("Email is required"),
    profileimage: Yup.mixed().required("Please upload your profile picture"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Please confirm Password to proceed"),
    termscheck: Yup.bool()
      .oneOf([true], "Accept Terms & Privacy Policy to proceed")
      .required(),
  });
  const initialValues = {
      companyType: "",
      companyname: "",
      logoimage: "",
      firstname: "",
      lastname: "",
      email: "",
      profileimage: "",
      password: "",
      repassword: "",
      termscheck: false,
    },
    onSubmit = async (values) => {
      const resp = await fetch("https://empmgtapp.herokuapp.com/api/employee/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      .then((response) => response.json())
      .then((error) => console.log(error));
      console.log(resp);
      alert(JSON.stringify(values, null, 2));
    };
  const companyTypeOptions = companyType.map((type, index) => (
    <option value={type} key={index}>
      {type}
    </option>
  ));
  const renderError = (message) => <p style={{ color: "red" }}>{message}</p>;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div style={{ width: "100%", margin: "126px 0 0 0" }}>
            <div style={{ width: "85%", margin: "0px auto 0px 40px" }}>
              <div>
                <h2
                  style={{
                    fontFamily: '"Lato", sans-serif',
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#000000",
                    lineHeight: "4vh",
                    margin: "0 0 16px 0",
                  }}
                >
                  Register
                </h2>
              </div>
              <div>
                <p
                  style={{
                    width: "43.5vw",
                    fontFamily: '"Lato", sans-serif',
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "4vh",
                    color: "#000000",
                    marginBottom: "45px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  eget justo, neque gravida nec at massa auctor.
                </p>
              </div>
              <div>
                <Field
                  className={`form-select form-control ${
                    touched.companyType && errors.companyType && "is-invalid"
                  }`}
                  name="companyType"
                  as="select"
                >
                  <option className="form-option" value={""}>
                    Select Company Type
                  </option>
                  {companyTypeOptions}
                </Field>
                <ErrorMessage name="companyType" render={renderError} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ marginBottom: "64px" }}>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-input form-control ${
                        touched.companyname &&
                        errors.companyname &&
                        "is-invalid"
                      }`}
                      type="text"
                      name="companyname"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="companyname" render={renderError} />
                  </div>
                </div>
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-control ${
                        touched.logoimage && errors.logoimage && "is-invalid"
                      }`}
                      type="file"
                      id="logo-image"
                      name="logoimage"
                      accept="image/*"
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="logoimage" render={renderError} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "33px",
                }}
              >
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-input form-control ${
                        touched.firstname && errors.firstname && "is-invalid"
                      }`}
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="firstname" render={renderError} />
                  </div>
                </div>
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-input form-control ${
                        touched.lastname && errors.lastname && "is-invalid"
                      }`}
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="lastname" render={renderError} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "33px",
                }}
              >
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-input form-control ${
                        touched.email && errors.email && "is-invalid"
                      }`}
                      type="email"
                      name="email"
                      placeholder="Email"
                      style={{}}
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="email" render={renderError} />
                  </div>
                </div>
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={` form-control ${
                        touched.profileimage &&
                        errors.profileimage &&
                        "is-invalid"
                      }`}
                      type="file"
                      id="profile-image"
                      name="profileimage"
                      accept="image/*"
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="profileimage" render={renderError} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "33px",
                }}
              >
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-input form-control ${
                        touched.password && errors.password && "is-invalid"
                      }`}
                      type="password"
                      name="password"
                      placeholder="Password"
                      style={{}}
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="password" render={renderError} />
                  </div>
                </div>
                <div>
                  <div className="fieldcontainer">
                    <Field
                      className={`form-input form-control ${
                        touched.repassword && errors.repassword && "is-invalid"
                      }`}
                      type="password"
                      name="repassword"
                      placeholder="Re-type Password"
                    />
                  </div>
                  <div className="fieldcontainer">
                    <ErrorMessage name="repassword" render={renderError} />
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "33px" }}>
                <Field
                  className={`form-check ${
                    touched.password && errors.password && "is-invalid"
                  }`}
                  type="checkbox"
                  name="termscheck"
                  id="terms"
                />

                <label htmlFor="terms">
                  <span>
                    I agree to all{" "}
                    <span>
                      <a
                        href="http://#"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        Terms{" "}
                      </a>
                    </span>
                    and{" "}
                    <span>
                      <a
                        href="http://#"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </span>
                </label>
                <ErrorMessage name="termscheck" render={renderError} />
              </div>
              <button
                style={{
                  width: "150px",
                  height: "45px",
                  backgroundColor: "#3D50C7",
                  color: "#F8F8F8",
                  fontFamily: '"Lato", sans-serif',
                  fontSize: "16px",
                  fontWeight: "400",
                  border: "none",
                  borderRadius: "5px",
                  marginBottom: "48px",
                }}
                type="submit"
              >
                Create Account
              </button>
              <div>
                <p>
                  Already have an Account?{" "}
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
