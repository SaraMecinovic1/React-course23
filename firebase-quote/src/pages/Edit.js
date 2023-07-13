import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getQuoteById, updateQuoteData } from "../firebase" 


const editQuoteSchema = yup.object({
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
  category: yup.string().required("Category je obavezno polje"),
});

const Edit= () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const params = useParams();
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
    quoteSource: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(true);


  const getQuoteData = () => {
    setIsLoading(true);  //dok ne dobijemo podatke da se pojavi spiner
    getQuoteById(params.id) //funk koja uzima tr id citata
      .then((data) => {  //dobijene podatke 
        setIsLoading(false); //uskljuci se spiner
        delete data.id;  //izbrisemo id 
        setQuote(data);  // promenimo stanje stata na nove podatke
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  useEffect(()=>{
    getQuoteById()
  },[])

  const submitForm = async (values) => {  //saljemo nase izmenjene vrednosti
   setIsLoading(true)
   try{
    await updateQuoteData(params.id,values)
    getQuoteData()
   }finally{
    setIsLoading(false)
   }
  };

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  if (isLoading) {
    return (
      <div className="edit-quote-wrapper">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="edit-quote-wrapper">
      <div>
        <h1>Edit Quote page</h1>
        <Formik
          enableReinitialize={true}  //da nam ostavi popunjene inpute vrednostima sa servera
          initialValues={quote}
          validationSchema={editQuoteSchema}
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
              <div>
                <p>Text</p>
                <input
                  type="text"
                  name="quoteText"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quoteSource}
                />
                <p className="error-message">
                  {errors.quoteSource &&
                    touched.quoteSource &&
                    errors.quoteSource}
                </p>
              </div>
    
              <button onClick={handleSubmit} type="button">
                Submit
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Edit;