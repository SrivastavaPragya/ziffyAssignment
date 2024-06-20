import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="menus">
        <ul className="navList">
          <li className="link">
            <p>Home</p>
          </li>
          <li className="link">
            <p>BlockChain</p>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </li>
          <li className="link">
            <p>Developers</p>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </li>
          <li className="link">
            <p>More</p>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </li>
          <li className="link">
            <p>About</p>
          </li>
        </ul>
      </div>
      <div className="searchBar">
        <div className="searchValue">
          <p className="lightning">⚡️</p>
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
        <input type="text" placeholder="Search an userOp" />
      </div>
      <div className="profileDetails">
        <div className="onlineInd">
          <p className="akrm">OR</p>
          <span className="greenDot">•</span>

          <div className="userMenuContainer">
            <ul className="menuLists">
              <li className="userMenus">
                <span class="material-symbols-outlined">person</span>
                <p>View Profile</p>
              </li>
              <li className="userMenus">
                <span class="material-symbols-outlined">space_dashboard</span>
                <p>Dashboard</p>
              </li>
              <li className="userMenus">
                <span class="material-symbols-outlined">code</span>
                <p>API</p>
              </li>
              <li className="userMenus logout">
                <span class="material-symbols-outlined">logout</span>
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="userDetailings">
          <p className="userName">Olivia Rhye</p>
          <p className="email">olivia@jiffyscan.xyz</p>
        </div>
      </div>
      <div className="nightMode">
        <span class="material-symbols-outlined">dark_mode</span>
      </div>
    </div>
  );
};

export default Navbar;
