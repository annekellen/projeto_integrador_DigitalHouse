import React, { useState } from "react";
import "./style.css";
import FormSignup from "./FormSignUp"
import FormSuccess from "./FormSucces";

const FormAvalicao = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormAvalicao;