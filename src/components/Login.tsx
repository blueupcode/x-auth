import React from "react";
import { auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

const Login: React.FC = () => {
  const handleTwitterLogin = async () => {
		const provider = new TwitterAuthProvider();

		try {
      await signInWithPopup(auth, provider);
      alert("Login successful");
    } catch (error) {
      console.error("Error during sign in with Twitter", error);
      alert("Error during sign in with Twitter");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleTwitterLogin}>Login with Twitter</button>
    </div>
  );
};

export default Login;
