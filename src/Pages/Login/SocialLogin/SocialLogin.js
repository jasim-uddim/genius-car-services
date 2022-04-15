import React from "react";
import logo from "../../../images/social/google (1).png";
import facebook from "../../../images/social/feacebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mb-2 px-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block mx-auto w-50 mt-2"
        >
          <img src={github} alt="" />
          <span className="px-2">Github</span>
        </button>
      </div>
      <div>
        <button className="btn btn-info d-block mx-auto w-50 mt-2">
          <img src={facebook} alt="" />
          <span className="px-2">facebook</span>
        </button>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto w-50 mt-2"
        >
          <img src={logo} alt="" />
          <span className="px-2">Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
