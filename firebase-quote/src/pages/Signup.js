import React from "react";
import "../App.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { signUp } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const submitForm = async (values) => {
    try {
      await signUp(values.email, values.password, values.fullName);
      navigate("/");
    } catch (err) {
      console.log(err, "error");
    }

    console.log(values);
  };

  const Schema = yup.object({
    fullName: yup.string().min(3).required("Polje je obavezno!"),
    email: yup.string().email().required("Polje je obavezno!"),
    password: yup.string().min(6).max(10).required("Polje je obavezno!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    //   .required("Polje je obavezno!"),
  });

  return (
    <div className="allInfo">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={Schema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div className="name">
              <input
                placeholder="Ime"
                name="fullName"
                type="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}></input>
              <p>{errors.fullName && touched.fullName && errors.fullName}</p>
            </div>
            <div className="email">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}></input>
              <p>{errors.email && touched.email && errors.email}</p>
            </div>
            <div className="pasword">
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}></input>
              <p>{errors.password && touched.password && errors.password}</p>
            </div>
            <div className="confirmPassword">
              <input
                placeholder="Conform password"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}></input>
              <p>
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
            </div>
            <div className="button">
              <button className="butt1" onClick={handleSubmit} type="button">
                Sign up!
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default Signup;
