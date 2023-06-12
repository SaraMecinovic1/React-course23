import React from "react";
import "../App.css"
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({       // shema === nase validacije,pravila za prijavu,sta mora da sadrzi da bi bilo true
  email: yup.string().required("Nedostaje email").email("Email nije dobar"),
  password: yup.string().required().min(6).max(50),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: "" }}  // pocetne vrednosti
        onSubmit={(values, actions) => {  // values=trenutne vrijednosti polja forme(email...) actions= manipulacija validacijama
          fetch("https://js-course-server.onrender.com/user/login", {  //saljemo zahtev na server
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {  //ako smo dobili token sa servera da me prebaci na pocetnu str
                navigate("/");
              }
            });
            
        }}
        validationSchema={loginSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (
        //     !values.error ||
        //     values.error.length < 10 ||
        //     values.error.length > 100
        //   ) {
        //     errors.email = "Neispravan email";
        //   }
        //   return errors;
        // }}
      >
        {({
        // FUNKCIJE:
          values, // formikov state, trenutne vrijednosti polja forme
          errors, // errors = { email: 'Neispravan email' }
          touched, // touched = { email: true } //ako smo pretisnuli input
          handleChange, // azurira values(vrednost polja kao onChange funk) //kad hocemo da pozovemo nju pozivamo je u onChange funk kao arg
          handleBlur,
          handleSubmit, // manipulator onSubmit funk
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
                 {/* ako postoji greska u "errors.emal" i ako je taknuto  */}
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
