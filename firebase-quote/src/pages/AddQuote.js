import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { addQuote } from "../firebase";

const newQuoteSchema = yup.object({
  quoteText: yup
    .string()
    .required("quoteText je obavezno polje")
    .min(6, "quoteText mora da ima najmanje 6 karaktera")
    .max(100, "quoteText mora da ima najvise 50 karaktera"),
  quoteAuthor: yup
    .string()
    .required("quoteAuthor je obavezno polje")
    .min(4, "quoteAuthor mora da ima najmanje 6 karaktera")
    .max(50, "quoteAuthor mora da ima najvise 50 karaktera"),
  quoteSource: yup
    .string()
    .required("quoteSource je obavezno polje")
    .min(4, "quoteSource mora da ima najmanje 6 karaktera")
    .max(200, "quoteSource mora da ima najvise 50 karaktera"),
});

const AddQuote = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const submitForm = async (values) => {
    try {
      await addQuote(values);
      alert("Uspesno");
    } catch (err) {
      console.log(err);
    }
  };
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div className="add-quote-wrapper">
      <Formik
        initialValues={{
          quoteText: "",
          quoteAuthor: "",
          quoteSource: "",
          category: "",
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
                name="quoteText"
                onChange={handleChange("quoteText")}
                value={values.quoteText}
              />
              <p className="error-message">
                {errors.quoteText && touched.quoteText && errors.quoteText}
              </p>
            </div>
            <div>
              <p>Author</p>
              <input
                type="text"
                name="quoteAuthor"
                onChange={handleChange("quoteAuthor")}
                value={values.quoteAuthor}
              />
              <p className="error-message">
                {errors.quoteAuthor &&
                  touched.quoteAuthor &&
                  errors.quoteAuthor}
              </p>
            </div>
            <div>
              <p>Source</p>
              <input
                type="text"
                name="quoteSource"
                onChange={handleChange("quoteSource")}
                value={values.quoteSource}
              />
              <p className="error-message">
                {errors.quoteSource &&
                  touched.quoteSource &&
                  errors.quoteSource}
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
