import { useState, useEffect, useRef } from "react";
import "./NavLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  faCoffee,
  faCode,
  faMusic,
  faLaptop,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

import avatar from "../assets/pexels-elina-fairytale-3810968.jpg";
const NavLinks = () => {
  const [expand, setExpand] = useState(false);
  const expandHandler = () => {
    console.log("opl");
    setExpand(true);
  };

  const closeDropdown = () => {
    setExpand(false);
  };

  const dropdownIcons = [faCoffee, faCode, faMusic, faLaptop, faComputer];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const [value, setValue] = useState("");
  const inputHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <ul className="nav-links">
      <li>
        <a href="/explore" exact>
          Explore
        </a>
      </li>
      <li>
        <a href="/dashboard"> Dashboard </a>
      </li>
      <li>
        <a href="/">My Challenges</a>
      </li>
      <li>
        <a href="/">My Projects</a>
      </li>
      <li>
        <a href="/">Career Explorer</a>
      </li>
      <li>
        <a href="/explore" className="nav-link">
        {" "}
        <FontAwesomeIcon icon={faBell} />
      </a>
      </li>
      <li>
        <a href="/explore" className="nav-link">
        <FontAwesomeIcon icon={faMessage} />
      </a>
      </li>
      <li>
        <a href="/explore" className="nav-link">
        {" "}
        <FontAwesomeIcon icon={faQuestion} />
      </a>
      </li>
      <form>
        <input
          className="nav-search"
          type="text"
          id="usersearch"
          name="usersearch"
          placeholder="Search..."
          onChange={inputHandler}
        />
      </form>
      <a className="nav-link">
        <img
          src={avatar}
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "20px" }}
        />
      </a>
      <div className="expandable-icon">
      <FontAwesomeIcon icon={faBars} onClick={expandHandler} />
      {expand && (
        <div className="dropdown-content" ref={dropdownRef}>
          <div className="grid-list">
            {dropdownIcons.map((icon, index) => (
              <div key={index} className="grid-item">
                <FontAwesomeIcon icon={icon} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </ul>
  );
};

export default NavLinks;
