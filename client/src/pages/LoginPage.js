import { useState } from "react";
import Login from "../components/Login";

const LoginPage = () => {

    
  function handleSubmit(event) {
    event.preventDefault();
  }
  

    return (
        <div >
            <Login />
        </div>
    )
}
export default LoginPage