import React from "react";
import "../App.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authSlice } from "../store/authSlice";
import { login } from "../firebase";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email je obavezno polje, unesite email")
    .email("Email format nije dobar"),
  password: yup
    .string()
    .required("Sifra je obavezno polje, unesite sifru")
    .min(6, "Sifra mora da ima najmanje 6 karaktera")
    .max(50, "Sifra mora da ima najvise 50 karaktera"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    await login(values.email, values.password);
    navigate("/");
  };

  // const submitForm = (values) => {
  //   fetch("https://js-course-server.onrender.com/user/login", {
  //     method: "POST",
  //     body: JSON.stringify(values),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.message) {
  //         alert(data.message);
  //       }

  //       if (data.token) {
  //         const decoded = jwtDecode(data.token);
  //         dispatch(authSlice.actions.setData(decoded));
  //         localStorage.setItem("authToken", data.token);
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          submitForm(values);
        }}
      >
        {({
          values, // formikov state => { email: "", password: "" }
          errors, // errors = { email: 'Neispravan email', password: 'Password is required field' }
          touched, // touched = { email: true }
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <button
              onClick={() => {
                console.log(values, "values");
                console.log(errors, "errors");
                console.log(touched, "touched");
              }}
            >
              Console log states
            </button>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
