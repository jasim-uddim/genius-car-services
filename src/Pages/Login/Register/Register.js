import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";

import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <div className="register-form">
      <h1 className="text-center text-primary ">Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" required />

        <input
          type="email"
          name="email"
          id=""
          placeholder="your email"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="your password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`px-2 ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept genius car terms and condition
        </label>
        {/* <label
          className={agree ? "px-2 text-primary" : "text-danger px-2"}
          htmlFor="terms"
        >
          Accept genius car terms and condition
        </label> */}
        <input
          disabled={!agree}
          className="w-50 d-block bg-info mx-auto"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        new to genius car?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
