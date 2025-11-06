import React from "react";
import { useLocation } from "react-router-dom";
import {
  ForgotPass,
  Login,
  Signup,
  Verify,
} from "../components/index.components";

function Auth() {
  const location = useLocation();

  // check the current route
  const path = location.pathname;

  if (path === "/auth/login") {
    return <Login />;
  }

  if (path === "/auth/signup") {
    return <Signup />;
  }
  if (path === "/auth/forgot-pass") {
    return <ForgotPass />;
  }
  if (path === "/auth/verify") {
    return <Verify />;
  }

  // fallback (optional)
  return <div>Invalid route</div>;
}

export default Auth;
