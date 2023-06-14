import React, { useState } from "react";
import { useNavigate } from "react-router"; // to navigate to profile after register

import { useDispatch } from "react-redux"; // to invoke thunks

import { registerThunk } from "../services/auth-thunks"; // send register HTTP request to server

function RegisterScreen() {
    // to type username
    const [username, setUsername] = useState("");
    
    // to type password
    const [password, setPassword] = useState("");

    // to navigate to profile
    const navigate = useNavigate();

    // to invoke thunks
    const dispatch = useDispatch();

    // handles register button click
    const handleRegister = async () => {
        // send credentials to register controller
        try {
            // if successful, navigate to profile
            await dispatch(registerThunk({ username, password }));
            navigate("/tuiter/profile");
        } catch (e) {
            // if not show error
            alert(e);
        }
    };

    return (
        <div>
            <h1>Register</h1>

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
                    onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}
export default RegisterScreen;