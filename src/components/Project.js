import React, { useState } from "react";
import "./Project.css";
import lab from "../assets/2211.w026.n002.2800B.p1.2800.jpg"
import chall from "../assets/2306.w026.n002.3407B.p1.3407.jpg"
import reso from "../assets/starry-night-sky.jpg"
import proj from "../assets/rm218-bb-07.jpg"

const tabsData = [
  {
    title: "Labs",
    content: (
      <div>
        <img src={chall} alt="lab-img" style={{width: "100px"}}></img>
        <h4>Labs</h4>
        <p>The labs </p>
      </div>
    ),
  },
  {
    title: "Challenges",
    content: (
      <div>
        <img src={lab} alt="lab-img" style={{width: "100px"}}></img>
        <h4>Challenges</h4>
        <p>Challenge to recreate his space</p>
      </div>
    ),
  },
  {
    title: "Resources",
    content: (
      <div>
         <img src={reso} alt="lab-img" style={{width: "100px"}}></img>
        <h4>Resources</h4>
        <p>starry sky space</p>
      </div>
    ),
  },
  {
    title: "Projects",
    content: (
      <div>
          <img src={proj} alt="lab-img" style={{width: "100px"}}></img>
        <h4>Content of Projects</h4>
        <p>Here</p>
      </div>
    ),
  },
];
export const Project = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [toggles, setToggles] = useState({
    chooseCity: false,
    level: false,
    organizations: false,
    skills: false,
  });
  const toggleHandler = (toggleName) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [toggleName]: !prevToggles[toggleName],
    }));
  };

  const [value, setValue] = useState("");
  const inputHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const [darkMode, setDarkMode] = useState(false);

  const darkClickHandler = () => {
    setDarkMode(true);
    if (darkMode) {
      setDarkMode(false);
    }
  };
  return (
    <main className={darkMode ? `project-dark-mode` : `light-mode`}>
      <div>
        <button
          className={darkMode ? `project-dark-mode` : `light-mode`}
          onClick={darkClickHandler}
        >
      {darkMode ? 'Dark 🌙' : 'Light ☀️'}
        </button>
      </div>
      <div>
        <ul className="tabs">
          {tabsData.map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <div className="main-container">
        <div className="side-block">
          <button className="buttons-19">
            <h5>Labs</h5>
          </button>
          <hr></hr>
          <button className="buttons-19">
            <h5>Lab Programs</h5>
          </button>
          <hr></hr>
          <div className="filter-box">
            <h2>Filters</h2>
            <span> Reset</span>
          </div>
          <div className="checkbox-dropdown">
            <button
              className="buttons-19"
              onClick={() => toggleHandler("chooseCity")}
            >
              Choose city
            </button>
            {toggles.chooseCity ? (
              <ul className="checkbox-dropdown-list">
                <li>
                  <label>
                    <input type="checkbox" value="Milwaukee" name="city" />
                    Milwaukee
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="Denver" name="city" />
                    Denver
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="Boston" name="city" />
                    Boston
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="LA" name="city" />
                    LA
                  </label>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
          </div>
          <br></br>
          <div className="checkbox-dropdown">
            <button
              className="buttons-19"
              onClick={() => toggleHandler("level")}
            >
              Level
            </button>
            {toggles.level ? (
              <ul className="checkbox-dropdown-list">
                <li>
                  <label>
                    <input type="checkbox" value="Beginner" name="level" />
                    Beginner
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="Intermediate" name="level" />
                    Intermediate
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="Advanced" name="level" />
                    Advanced
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="Mixed" name="level" />
                    Mixed
                  </label>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
          </div>
          <br></br>
          <div className="checkbox-dropdown">
            <button
              className="buttons-19"
              onClick={() => toggleHandler("organizations")}
            >
              Organizations
            </button>
            {toggles.organizations ? (
              <ul className="checkbox-dropdown-list">
                <li>
                  <label>
                    <input type="checkbox" value="Prepr" name="organizations" />
                    Prepr
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Linux Foundation"
                      name="organizations"
                    />
                    Linux Foundation
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" value="Magnet" name="o" />
                    Advanced
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="CertNexus"
                      name="organizations"
                    />
                    CertNexus
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Ontario Chamber of Commerce"
                      name="organizations"
                    />
                    Ontario Chamber of Commerce
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Youth Boost"
                      name="organizations"
                    />
                    Youth Boost
                  </label>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
          </div>
          <br></br>
          <div className="checkbox-dropdown">
            <button
              className="buttons-19"
              onClick={() => toggleHandler("skills")}
            >
              Skills
            </button>
            {toggles.skills ? (
              <form>
                <input type="text" placeholder="Search Skills"></input>
              </form>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* <DarkModeToggle></DarkModeToggle> */}
        <section className="center-block">
          <form>
            <input
              type="text"
              id="usersenter"
              name="userenter"
              placeholder="Search"
              onChange={inputHandler}
            ></input>
            <button className="buttons-19">Search</button>
            {/* <span>Sort by</span> */}
          </form>
          <div className="tab-content">{tabsData[activeTab].content}</div>
        </section>
      </div>
    </main>
  );
};

export default Project;
