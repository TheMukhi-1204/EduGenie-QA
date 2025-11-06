import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!status && !localStorage.getItem("token")) {
      navigate("/auth/login", { replace: true });
    }
  }, [status,navigate]);

  return <div>HOME</div>;
}

export default Home;
