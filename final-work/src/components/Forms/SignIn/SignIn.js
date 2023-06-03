import React, { useRef, useState } from "react";
import "./SignIn.css"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const SignIn = ({onLogin}) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  //valor de referncia inicial
  const userRef = useRef(null);
  const passRef = useRef(null);

const alertSignIn = (valueAlert) => {
  valueAlert.current.focus();
  valueAlert.current.style.borderColor = "red";
  valueAlert.current.style.outline= "none";
}

const navigate = useNavigate();

const signInClicked = () => {
  if (emailRef.current.value.length === 0) {
    emailRef.current.focus();
    emailRef.current.style.borderColor = "red";
    emailRef.current.style.outline = "none";
    return;
  }

  if(password.length === 0){
    passwordRef.current.focus();
    passwordRef.current.style.borderColor = "red";
    passwordRef.current.style.outline = "none";
    return;
  }
  alert(`El mail ingresado es: ${email} y password ${password}`)

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

    // Realizar acciones adicionales, como validaciones o llamadas a API

    // Limpiar los campos después del envío
    setUser("");
    setPass("");

    alert("Form submitted successfully");
  };

  return (
    <div className="signIn-container">
        <div className="signIn-box">
             <h1>Sign In</h1>
             <form onSubmit={handleSubmit}>
             <div className="input-container">
              User:
             <input className="input-control"
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
          <input className="input-control"
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
        <button className="signIn-button" type="button" onClick={signInClicked}> Login </button>
      </div>
      </form>
      </div>

      <div className="div-createAccount">
      New to virtual library? <Link to="/signUp">Create an account.</Link>
      </div>

    </div>
  );
};

export default SignIn;

