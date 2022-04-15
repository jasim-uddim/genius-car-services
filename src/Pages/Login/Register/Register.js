import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";

import auth from "../../../firebase.init";
const Register = () => {
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
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-form">
      <h1 className="text-center text-primary">Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" />

        <input type="email" name="email" id="" placeholder="your email" />

        <input
          type="password"
          name="password"
          id=""
          placeholder="your password"
        />
        <input type="submit" value="Register" />
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
    </div>
  );
};

export default Register;
