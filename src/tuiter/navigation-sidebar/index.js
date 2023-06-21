import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");

    let links = [
        ["home", "bi bi-house"],
        ["explore-screen", "bi bi-binoculars"],
        ["notifications", "bi bi-bell"],
        ["messages", "bi bi-envelope"],
        ["bookmarks", "bi bi-book"],
        ["lists", "bi bi-list-ul"],
        ["profile", "bi bi-person"],
        ["more", "bi bi-three-dots"]
    ];

    const { currentUser } = useSelector((state) => state.user);

    if (!currentUser) {
        links = [...links, ["login", "bi bi-box-arrow-in-right"], ["register", "bi bi-r-square"]]
    }

    return (
        <div className="list-group">
            {links.map((link) => 
                <Link to={`/tuiter/${link[0]}`} className={`list-group-item text-capitalize text-wrap ${active === link[0] ? "active" : ""}`}>
                    <i className={link[1]}></i>

                    <span className="d-none d-lg-none d-xl-inline">
                    &nbsp; {link[0]}
                    </span>
                </Link>
            )}

        </div>
    );

};
export default NavigationSidebar;