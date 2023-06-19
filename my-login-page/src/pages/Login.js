import { Formik } from "formik";
import "../App.css";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shema = yup.object({
  email: yup
    .string()
    .email("Neispravan email")
    .required("Email je obavezno polje, unesite email"),
  password: yup
    .string()
    .required("Sifra je obavezno polje, unesite sifru")
    .min(6, "Sifra mora da ima najmanje 6 karaktera")
    .max(50, "Sifra mora da ima najvise 50 karaktera"),
});
const Login = () => {
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  const loginFunkc = (values) => {
    fetch("https://js-course-server.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          setState(false);
          alert("Uspesna prijava");
        }else{
            alert("Neuspesna prijava")
            
        }
      })
      .catch((error) => console.log("err", error));
  };
  //   if (state) {
  //     return (
  //       <div className="edit-quote-wrapper">
  //         <h1>Loading...</h1>
  //       </div>
  //     );
  //   }

  return (
    <div className="page">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Shema}
        onSubmit={(values, actions) => {
          loginFunkc(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
        }) => (
          <div className="page1">
            <div className="deo1">
              <h1>Login to Your Account</h1>
              <div className="card1">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                ></input>
                <p className="error-message">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                ></input>
                <p className="error-message">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="butt1">
                <button
                  type="button"
                  onClick={() => {
                    console.log("submit work");
                    handleSubmit();
                  }}
                >
                  {" "}
                 LOGIN
                </button>
              </div>
            </div>
            <div className="deo2">
              <h1>New Here</h1>
              <p>
                Sign up and discover a great <br /> mount of new opportunities
              </p>
              <button
                className="butt2"
                onClick={() => {
                  navigate("/signup");
                }}
              > Sign up!</button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
