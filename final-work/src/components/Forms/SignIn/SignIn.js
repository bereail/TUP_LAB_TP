import React, { useRef, useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";

const SignIn = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const userRef = useRef(null);
  const passRef = useRef(null);

  const alertSignIn = (valueAlert) => {
    valueAlert.current.focus();
    valueAlert.current.style.borderColor = "red";
    valueAlert.current.style.outline = "none";
  };

  const navigate = useNavigate();

  const signInClicked = () => {
    if (userRef.current.value.length === 0) {
      alertSignIn(userRef);
      return;
    }
    if (passRef.current.value.length === 0) {
      alertSignIn(passRef);
      return;
    }
    alert(
      `El usuario es: ${userRef.current.value} y la contraseña es: ${passRef.current.value}`
    );

    onLogin();
    navigate("/home");
  };

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser("");
    setPass("");

    alert("Form submitted successfully");
  };

  return (
    <>
      <NavBar />
      <div className="signIn-container">
        <div className="signIn-box">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              User:
              <input
                className="input-control"
                type="text"
                placeholder="Enter your user"
                name="user"
                value={user}
                ref={userRef}
                onChange={handleChangeUser}
                required
                pattern="[a-zA-Z]+"
              />
            </div>
            <div className="input-container">
              Password:
              <input
                className="input-control"
                type="password"
                placeholder="******"
                name="pass"
                ref={passRef}
                value={pass}
                onChange={handleChangePass}
                required
              />
              <div>
                <Link to="/forgotPass">Forgot password?</Link>
              </div>
            </div>

            <div className="button-div">
              <button
                className="signIn-button"
                type="button"
                onClick={signInClicked}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="div-createAccount">
          New to virtual library? <Link to="/signUp">Create an account.</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
