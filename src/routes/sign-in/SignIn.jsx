import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  const logGooglePopUpUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGooglePopUpUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
