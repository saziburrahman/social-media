import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  // const dispatch = useDispatch();
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // data.password === data.confirmpass
      //   ? dispatch(signUp(data))
      //   : setConfirmPass(false);
    } else {
      // dispatch(logIn(data));
    }
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const resetForm = () => {
    setConfirmPass(true);
    setdata({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      {/* left Side of logo  */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>SRS Media</h1>
          <h6>Share your idea throughout the world</h6>
        </div>
      </div>
      {/* Right Side  */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                name="firstname"
                id=""
                className="infoInput"
                placeholder="First Name"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                name="lastname"
                id=""
                className="infoInput"
                placeholder="Last Name"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              name="username"
              id=""
              className="infoInput"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                id=""
                className="infoInput"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              alignSelf: "flex-end",
              fontSize: "12px",
              marginRight: "5px",
            }}
          >
            *Confirm Password does not matched
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

// function Login() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Log In</h3>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//         </div>
//         <div>
//           <span>Don't have an account? Sign Up</span>
//           <button className="button infoButton">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign Up</h3>
//         <div>
//           <input
//             type="text"
//             name="firstname"
//             id=""
//             className="infoInput"
//             placeholder="First Name"
//           />
//           <input
//             type="text"
//             name="lastname"
//             id=""
//             className="infoInput"
//             placeholder="Last Name"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name=""
//             id=""
//             className="infoInput"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="password"
//             placeholder="Password"
//             id=""
//             className="infoInput"
//           />
//           <input
//             type="text"
//             name="confirmpass"
//             placeholder="Confirm Password"
//             id=""
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account? Login!{" "}
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

export default Auth;
