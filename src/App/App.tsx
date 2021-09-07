import React from "react";
import { FaRegHeart, FaHome } from "react-icons/fa";
import "./App.scss";
import lewis from "../assets/lewis.svg";
import MyProfile from "../my-profile/MyProfile";

const App : React.FunctionComponent = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='header-content'>
          <span className='logo'>Boolgram</span>
          <input className='search' type='text' placeholder='Search' />
          <div className='actions'>
            {/* TODO border might be too thick and colour might be off */}
            <FaRegHeart size={25} />
            {/* TODO colour is off */}
            <FaHome size={25} />
            <img
              src={lewis}
              className='rounded-img my-profile'
              alt='my-profile'
            />
          </div>
        </div>
      </header>
      <div className='content-container'>
        <div className='feed'>feed column</div>
        <div className='sidebar'>
          <MyProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
