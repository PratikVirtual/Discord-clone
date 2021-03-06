import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
    const signIn = () => {
        //do clever google login shizz....  
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return ( <
        div className = "login" >
        <
        div className = "login__logo" >
        <
        img src = "data:image/png;base64,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"
        alt = "logo" / >
        <
        /div>

        <
        Button onClick = { signIn } > Sign In < /Button> < /
        div >
    )
}

export default Login