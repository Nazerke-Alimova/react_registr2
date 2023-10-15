import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Message from "../Message/Message";
import Error from "../Error/Error";

function Form() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstname: e.target.value });
  };
  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastname: e.target.value });
  };
  const handleEmailNameInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <Message />
        ) : null}
        <Input
          onChange={handleFirstNameInputChange}
          value={values.firstname}
          id="first-name"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstname ? (
          <Error message="Please enter a first name" />
        ) : null}
        <Input
          onChange={handleLastNameInputChange}
          value={values.lastname}
          id="last-name"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastname ? (
          <Error message="Please enter a last name" />
        ) : null}
        <Input
          onChange={handleEmailNameInputChange}
          value={values.email}
          id="email"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <Error message="Please enter an email address" />
        ) : null}
        <Button>Register</Button>
      </form>
    </div>
  );
}

export default Form;
