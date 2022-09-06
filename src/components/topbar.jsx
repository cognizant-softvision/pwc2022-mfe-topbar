import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

const projectPrefix = "Programmer's Week";
const projectSufix = "Micro-frontends";


const Topbar = ({logged, name, logout }) => {
  const signOut = () => {
    logout()
  };

  return (
    <div className="topBar">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="">
            <span className="projectPrefix semi-bold">{projectPrefix} </span>
            <span className="projectSufix semi-bold">{projectSufix}</span>
          </div>
        </Link>
      </div>

      <div className="userArea">{/* center */}</div>

      <div className="navActions">
          <>
            {logged ? (
              <>
                 <Link to="/about" className="navLink">
                 About
               </Link>
               <Link to="/join" className="navLink">
                 Join
               </Link>
              <Link to="/" className="navLink" onClick={signOut}>
                {name}
              </Link>
              </>
            ) : (
              <Link to="/login" className="navLink">
                Login
              </Link>
            )}
          </>
      </div>
    </div>
  );
};

export default Topbar;
