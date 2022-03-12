import React, {useRef, useState} from "react";
import "./nav.css";
const Nav = () => {
  const [openList, setOpenList] = useState(false);
  const navList = useRef();
  function toggleNavList() {
    setOpenList((prev) => !prev);
    if (openList) {
      navList.current.classList.remove("scale-up-ver-top");
      navList.current.classList.add("scale-down-ver-top");
    } else {
      navList.current.classList.remove("scale-down-ver-top");
      navList.current.classList.add("scale-up-ver-top");
    }
  }
  return (
    <nav className="nav section">
      <h2 className="logo">GPT-3</h2>
      <ul ref={navList}>
        <li>Home</li>
        <li>What is GPT?</li>
        <li>Open AI</li>
        <li>Case Studies</li>
        <li>Library</li>
      </ul>
      <div className="buttons">
        <button>Sign in</button>
        <button>Sign up</button>
        <button onClick={toggleNavList}>
          {openList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
