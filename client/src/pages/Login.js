import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <button onClick={() => setShowLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <button onClick={() => setShowLogin(true)}>Log In</button>
        </>
      )}
    </>
  );
}

export default Login;
