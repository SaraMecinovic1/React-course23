import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { addQuote } from "../firebase";

const newQuoteSchema = yup.object({
  Quote: yup
    .string()
    .required("Quote je obavezno polje")
    .min(6, "Quote mora da ima najmanje 6 karaktera")
    .max(100, "Quote mora da ima najvise 50 karaktera"),
  Author: yup
    .string()
    .required("Author je obavezno polje")
    .min(4, "Author mora da ima najmanje 6 karaktera")
    .max(50, "Author mora da ima najvise 50 karaktera"),
  Source: yup
    .string()
    .required("Source je obavezno polje")
    .min(4, "Source mora da ima najmanje 6 karaktera")
    .max(200, "Source mora da ima najvise 50 karaktera"),
});

const AddQuote = () => {
  const navigate = useNavigate();
  // const token = localStorage.getItem("authToken");

  const submitForm = async (values) => {
    try {
      await addQuote(values);
      alert("Uspesno");
    } catch (err) {
      console.log(err, "error");
    }
  };
  // if (!token) {
  //   return <Navigate to={"/login"} replace={true} />;
  // }

  return (
    <div className="add-quote-wrapper">
      <Formik
        initialValues={{
          Quote: "",
          Author: "",
          Source: "",
         
        }}
        validationSchema={newQuoteSchema}
        onSubmit={(values) => submitForm(values)}>
        {({
          values, // formikov state => { email: "", password: "" }
          errors, // errors = { email: 'Neispravan email', password: 'Password is required field' }
          touched, // touched = { email: true }
          handleChange,
          handleSubmit,
        }) => (
          <div>
            <div>
              <p>Text</p>
              <input
                type="text"
                name="Quote"
                onChange={handleChange("Quote")}
                value={values.Quote}
              />
              <p className="error-message">
                {errors.Quote && touched.Quote && errors.Quote}
              </p>
            </div>
            <div>
              <p>Author</p>
              <input
                type="text"
                name="Author"
                onChange={handleChange("Author")}
                value={values.Author}
              />
              <p className="error-message">
                {errors.Author &&
                  touched.Author &&
                  errors.Author}
              </p>
            </div>
            <div>
              <p>Source</p>
              <input
                type="text"
                name="Source"
                onChange={handleChange("Source")}
                value={values.Source}
              />
              <p className="error-message">
                {errors.Source &&
                  touched.Source &&
                  errors.Source}
              </p>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddQuote;
