import React, { useState } from "react";
import { useNavigate } from "react-router"; // to navigate to profile after login

import { useDispatch } from "react-redux"; // to invoke thunks

import { loginThunk } from "../services/auth-thunks"; // send login HTTP request to server

function LoginScreen() {
    // to type username
    const [username, setUsername] = useState("");
    
    // to type password
    const [password, setPassword] = useState("");

    // to navigate to profile
    const navigate = useNavigate();

    // to invoke thunks
    const dispatch = useDispatch();

    // handles login button click
    const handleLogin = async () => {
        // send credentials to login controller
        try {
            // if successful, navigate to profile
            await dispatch(loginThunk({ username, password }));
            navigate("/tuiter/profile");
        } catch (e) {
            // if not show error
            alert(e);
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" value={username}
                onChange={(event) => setUsername(event.target.value)}/>
            </div>

            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            
            <button className="btn btn-primary mt-2"
                    onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
export default LoginScreen;