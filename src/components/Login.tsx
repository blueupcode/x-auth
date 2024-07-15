import React from "react";
import { auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

const Login: React.FC = () => {
	const [user, setUser] = React.useState<firebase.User | null>(null);

  const handleTwitterLogin = async () => {
		const provider = new TwitterAuthProvider();

		try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error during sign in with Twitter', error);
      alert('Error during sign in with Twitter');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleTwitterLogin}>Login with Twitter</button>
      {user && (
        <div>
          <h3>User Info</h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
