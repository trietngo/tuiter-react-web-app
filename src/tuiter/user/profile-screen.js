import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    
    console.log("CurrentUser is:", currentUser);

    const [ profile, setProfile ] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = () => { dispatch(updateUserThunk(profile)); };

    useEffect(() => {
        const loadProfile = () => {
            try {
                const { payload } = dispatch(profileThunk());
                setProfile(payload);
            }
            catch (error) {
                console.error(error);
                navigate("/login");
            }
            
        };

        loadProfile();
        
    }, []);
    
    console.log("Profile is: ", profile)
    
    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={profile.firstName} 
                        onChange={(event) => {
                            const newProfile = {
                            ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}/>
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" value={profile.firstName} 
                        onChange={(event) => {
                            const newProfile = {
                            ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}/>
                    </div>
                    
                </div>
            )}

            <button
                className="btn btn-primary"
                onClick={() => {
                dispatch(logoutThunk());
                navigate("/tuiter/login");
                }}>                   Logout</button>
            <button className="btn btn-primary" onClick={save}>Save  </button>
        </div>
    );
}
export default ProfileScreen;