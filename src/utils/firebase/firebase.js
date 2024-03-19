import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp3wDo7XomB18MQQMvUTlSEbRAsdU6Yq0",
  authDomain: "crwn-clothing-db-ef99f.firebaseapp.com",
  projectId: "crwn-clothing-db-ef99f",
  storageBucket: "crwn-clothing-db-ef99f.appspot.com",
  messagingSenderId: "423291887884",
  appId: "1:423291887884:web:b712bc9f79240b40662929",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error when creating the user", error.message);
    }
  }

  return userDocRef;
};
