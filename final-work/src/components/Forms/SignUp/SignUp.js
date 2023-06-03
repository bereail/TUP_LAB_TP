import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    pass: "",
    rptPass: "",
  });

  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const rptPassRef = useRef(null);

  const alertSignUp = (valueAlert) => {
    valueAlert.current.focus();
    valueAlert.current.style.borderColor = "red";
    valueAlert.current.style.outline = "none";
  };

  const signUpClicked = () => {
    if (nameRef.current.value.length === 0) {
      alertSignUp(nameRef);
      return;
    }
    if (lastNameRef.current.value.length === 0) {
      alertSignUp(lastNameRef);
      return;
    }
    if (emailRef.current.value.length === 0) {
      alertSignUp(emailRef);
      return;
    }
    if (passRef.current.value.length === 0) {
      alertSignUp(passRef);
      return;
    }
    if (rptPassRef.current.value.length === 0) {
      alertSignUp(rptPassRef);
      return;
    }

    // Resto del código...

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, email, pass, rptPass } = formData;

    // Validar los campos antes de enviarlo al servidor
    if (!name || !lastName || !email || !pass || !rptPass) {
      alert("Please, complete all fields");
      return;
    }

    // Validar que las contraseñas coincidan
    if (pass !== rptPass) {
      alert("Password do not match");
      return;
    }

    // Validar el formato de nombre y apellido
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
      alert("Name should only contain letters");
      return;
    }
    if (!nameRegex.test(lastName)) {
      alert("Last name should only contain letters");
      return;
    }

    // Limpiar los campos después del envío
    setFormData({
      name: "",
      lastName: "",
      email: "",
      pass: "",
      rptPass: "",
    });

    // Enviar los datos al servidor
    sendDataToServer(formData);

    alert("Form submitted successfully");
  };

  const sendDataToServer = (data) => {
    // Realizar la llamada al servidor para enviar los datos
    // Aplicar medidas de seguridad del lado del servidor
    console.log("Sending data to server: ", data);
  };

  const { name, lastName, email, pass, rptPass } = formData;

  return (
    <div className="signUp-container">
      <div className="signUp-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            Name:
            <input className="input-control"
              ref={nameRef}              
              type="text"
              placeholder="  Enter your name"
              name="name"
              value={name}
              onChange={handleChange}
              required
              pattern="[a-zA-Z]+"
            />
          </div>
          <div className="input-container">
            Last Name:
            <input className="input-control"
              ref={lastNameRef}             
              type="text"
              placeholder="  Enter your lastname"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
              pattern="[a-zA-Z]+"
            />
          </div>
          <div className="input-container">
            Email:
            <input className="input-control"
              ref={emailRef}              
              type="email"
              placeholder="  Your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            Password:
            <input className="input-control"
              ref={passRef}              
              type="password"
              placeholder="  *********"
              name="pass"
              value={pass}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            Repeat Password:
            <input className="input-control"
              ref={rptPassRef}              
              type="password"
              placeholder="  Repeat your password"
              name="rptPass"
              value={rptPass}
              onChange={handleChange}
            />
          </div>
          <div className="div-button">
            <button className="signUp-button" type="submit" onClick={signUpClicked}>
              Send
            </button>
          </div>
          <div>
          <p className="link-signIn"> Already have an account?<Link to="/signIn"> Sign in →</Link> </p>    
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;