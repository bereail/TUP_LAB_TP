import React from "react";
import "./ForgotPass.css"

const ForgotPass = ({email}) => {
    return (
        <div className='div-resetPass'>
            <form>
                <label>Enter your user account's verified email address</label>
                <input 
                    type="email"
                    ref={email}
                    placeholder="Enter your mail address"
                />
            </form>
            <div className="btn-resetPass">
                <button type="submit">Send password reset email</button>
            </div>
        </div>
    );
};

export default ForgotPass;