import React from "react";
import Login from "../components/Login";

const LoginPage = (props) => {
  console.log("loginPage", props);
  return (
    <div>
      <button>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
