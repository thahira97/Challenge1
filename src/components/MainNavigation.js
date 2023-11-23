import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoNew.png";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop"
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      { drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      { <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>}
  
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}> 
          <span />
          <span />
          <span />
        </button>
        <span className="main-navigation__title">
        <img src={logo} alt="prepr" style={{ width: "100px" }}></img>
        </span >
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
