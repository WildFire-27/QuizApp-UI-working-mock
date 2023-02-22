import React from 'react';

const Login = () => {
  return (
    <div className='formDIV'>
   
      <form>
      <h1>Login to Start QUIZ</h1>
        <div id="formDIV">
            <div id="inputLabel">
              <h2>Email :</h2>
              <input type="email"></input>
            </div>

            <div id="inputLabel">
              <h2>Password :</h2>
              <input type="password"></input>
            </div>

          <div>
            <button id="loginBTN">LogIN</button>
            {/* <button id="loginBTN">SignUP</button> */}
          </div>

        </div>

      </form>

    </div>
  );
}

export default Login;
