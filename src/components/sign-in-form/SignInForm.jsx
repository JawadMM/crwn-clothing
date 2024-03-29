import React, { useState } from "react";
import "./SignInForm.scss";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../input-form/FormInput";
import Button from "../button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Incorrect email or password");
      }
      console.log(error);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
