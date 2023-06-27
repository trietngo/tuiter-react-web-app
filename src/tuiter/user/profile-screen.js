import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    console.log("PROFILE SCREEN RENDERED")
    const { currentUser } = useSelector((state) => state.user);
    
    console.log("CurrentUser is:", currentUser);

    const [ profile, setProfile ] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = async () => { 
        try {
            await dispatch(updateUserThunk(profile));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const loadProfile = () => {
            console.log("Inside loadProfile");
            try {
                const { payload } = dispatch(profileThunk());
                setProfile(payload);
            }
            catch (error) {
                console.error(error);
                navigate("/login");
            }
            
        };

        //loadProfile();
        
    }, []);

    console.log("Profile is: ", profile)
    
    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <div>
                    <div className="mb-2">
                        <label>First Name:</label>
                        <input type="text" value={profile.firstName} 
                        onChange={(event) => {
                            setProfile({
                            ...profile, firstName: event.target.value,
                            });
                        }}/>
                    </div>

                    <div className="mb-2">
                        <label>Last Name:</label>
                        <input type="text" value={profile.lastName} 
                        onChange={(event) => {
                            setProfile({
                            ...profile, lastName: event.target.value,
                            });
                        }}/>
                    </div>
                    
                </div>
            )}

            <button
                className="btn btn-primary m-2"
                onClick={() => {
                dispatch(logoutThunk());
                navigate("/tuiter/login");
                }}>                   Logout</button>
            <button className="btn btn-primary m-2" onClick={save}>Save  </button>
        </div>
    );
}
export default ProfileScreen;