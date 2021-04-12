import React, { useState } from "react";
import "./style.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSucces";
import img from './img/img-cadastro.jpg'
const FormLogin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src={img} alt={'img '} />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormLogin;

