import React, { useState } from "react";

import LoginForm from "../components/LoginForm";

import RegisterForm from "../components/RegisterForm";



const LoginPage = () => {

  const [isRegistering, setIsRegistering] = useState(false);



// This function will handle switching between forms

const switchToSignUp = () => {

  setIsRegistering(true);

};



const switchToLogin = () => {

  setIsRegistering(false);

};



  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

      {isRegistering ? (

        <RegisterForm switchToLogin={switchToLogin} />

      ) : (

        <LoginForm switchToSignUp={switchToSignUp} />

      )}

    </div>

  );

};



export default LoginPage;