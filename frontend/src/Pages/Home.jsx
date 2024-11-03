// Home.js
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import homeSvg from "../assets/images/home.svg";
import profileSvg from "../assets/images/profile.svg";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  //console.log(user);

  return (
    <div>
      {user ? (
       <div className="welcome-container">
        <img src={profileSvg} className="profile"/>
       <h1>Welcome {user.firstname} {user.lastname}</h1>
       <button onClick={logout} className="button logout-button">
           Logout
         </button>
     </div>
      ) : (
        <div className="welcome-container">
          <div>
          <h1>Welcome to SecureAuth</h1>
          <p>Please choose an option below:</p>
          </div>
          <div className="button-container">
            <NavLink to="/login" className="button login-button">
              Login
            </NavLink>
            <NavLink to="/register" className="button register-button">
              Register
            </NavLink>
          </div>
          <img src={homeSvg} className="home"/>
        </div>
      )}
    </div>
  );
};

export default Home;
