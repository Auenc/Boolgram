import React from 'react';
import "./MyProfile.scss";
import lewis from '../assets/lewis.svg';

const MyProfile: React.FunctionComponent = () => {
    return (
        <div className="my-profile">
            <img className="picture" src={lewis} alt="my-profile"/>
            <div className="names">
                <div className="account-name">LewisCampbell</div>
                <div className="full-name">Lewis Campbell</div>
            </div>
            <a href="/">Passa a</a>
        </div>
    );
}

export default MyProfile;