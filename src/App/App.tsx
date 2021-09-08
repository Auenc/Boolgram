import React from "react";
import { FaRegHeart, FaHome } from "react-icons/fa";
import "./App.scss";
import lewis from "../assets/lewis.svg";
import MyProfile from "../my-profile/MyProfile";
import SuggestedProfileList from "../SuggestedProfileList/SuggestedProfileList";
import StoryList from "../StoryList/StoryList";

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
        <div className='feed'>
          <StoryList />
        </div>
        <div className='sidebar'>
          <MyProfile />
          <SuggestedProfileList />
          <span className="copyright">&copy; 2021 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    </div>
  );
}

export default App;
