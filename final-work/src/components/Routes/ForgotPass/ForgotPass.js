import React, { useRef } from "react";
import "./ForgotPass.css";
import NavBar from "../../NavBar/NavBar";

const ForgotPass = () => {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    // Resto del código...

    alert(`Reset password email sent to ${email}`);
  };

  return (
    <>
      <NavBar />

      <div className="div-resetPass">
        <form onSubmit={handleSubmit}>
          <label>Enter your user account's verified email address</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your mail address"
            required
          />
          <div className="btn-resetPass">
            <button type="submit">Send password reset email</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPass;
