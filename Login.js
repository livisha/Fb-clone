import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionType} from './reducer';


function Login() {
    const [{state},dispatch]=useStateValue();

  const signIn=()=>{
      auth.signInWithPopup(provider)
      .then((result) => {

        dispatch({
            type:actionType.SET_USER,
            user:result.user,
        })
          console.log(result.user)
      }).catch((error) => alert(error.message))
  };
    return (
        <div className="login">
            <div className="login_logo">
              <img
              src="https://dwglogo.com/wp-content/uploads/2016/06/facebook_emblem.png"
              alt=""
              />  
              <img
              src="https://www.adiveter.com/wp-content/uploads/2020/12/Facebook-logo.png"
              alt=""
              />
            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login
