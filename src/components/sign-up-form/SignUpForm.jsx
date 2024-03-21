import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../input-form/FormInput";
import { Form } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Password has to match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("User already registerd");
      }
      console.log(error.message);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
          required
        />
        <FormInput
          label={"Email"}
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          required
        />
        <FormInput
          label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
