import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>SRS Media</h1>
          <h6>Share your idea throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <span>Don't have an account? Sign Up</span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            name="firstname"
            id=""
            className="infoInput"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            id=""
            className="infoInput"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            className="infoInput"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            id=""
            className="infoInput"
          />
          <input
            type="text"
            name="confirmpass"
            placeholder="Confirm Password"
            id=""
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login!{" "}
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
