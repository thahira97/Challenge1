import "./Explore.css";
import { useState } from "react";
import { Project } from "./Project";
export const Explore = () => {
  const [cancel, setCancel] = useState(false);
  const CancelSubmitHandler = () => {
    setCancel(true);
  };
  const [value, setValue] = useState("");
  const inputHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <div className={`explore-section ${cancel ? "hidden" : "visible"}`}>
      <button className="main-cancel" onClick={CancelSubmitHandler}>
        X
      </button>
      <h1>Explore Your Interests</h1>
      <p>We'll recommend content based on your interests we've listed here.</p>
      <p>Feel free to add or remove topics to customize your experience !</p>
      <br></br>
      <div className="main-searchbar">
        <form method="get">
          <input
            type="text"
            id="searchbar"
            name="searchbar"
            placeholder="🔍 Search Skills"
            onChange={inputHandler}
          ></input>
        </form>
      </div>
      <h1>Click an interest to narrow your recommendations.</h1>

      <span className="skills">
        <button>
          <h6>Mobile device development</h6>
        </button>
        <button>
          <h6>Mobile Applications</h6>
        </button>
        <button>
          <h6>Anti-racism</h6>
        </button>
        <button>
          <h6>Fuzzy Logic</h6>
        </button>
        <button>
          <h6>Mindfuness</h6>{" "}
        </button>
        <button>
          {" "}
          <h6>MongoDB</h6>
        </button>
        <button>
          <h6>React.js</h6>
        </button>
        <button>
          <h6>Leadership</h6>
        </button>
        <button>
          <h6>Planning</h6>
        </button>
        <button>
          <h6>Plugins</h6>
        </button>
      </span>
    </div>
  );
};
