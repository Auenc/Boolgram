import React from 'react';
import "./MyProfile.scss";
import lewis from '../assets/lewis.svg';

const MyProfile: React.FunctionComponent = () => {
    return (
        <div className="my-profile">
            <img className="picture link" src={lewis} alt="my-profile"/>
            <div className="names">
                <div className="account-name link">LewisCampbell</div>
                <div className="full-name link">Lewis Campbell</div>
            </div>
            <a href="/">Passa a</a>
        </div>
    );
}

export default MyProfile;