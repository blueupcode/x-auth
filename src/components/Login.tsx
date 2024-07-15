import React from "react";
import { auth } from "./firebase";
import { signInWithPopup, User } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

const Login: React.FC = () => {
	const [user, setUser] = React.useState<User | null>(null);
	const [loading, setLoading] = React.useState<Boolean>(true);
  
	const handleTwitterLogin = async () => {
		const provider = new TwitterAuthProvider();

		try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error during sign in with Twitter', error);
      alert('Error during sign in with Twitter');
    }
  };

	React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

	if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <div>
          <h3>User Info</h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      ) : (
        <button onClick={handleTwitterLogin}>Login with Twitter</button>
      )}
    </div>
  );
};

export default Login;
