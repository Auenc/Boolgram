import react from "react";
import "./SuggestedProfile.scss";
import lewis from "../assets/lewis.svg";

const SuggestedProfile: react.FunctionComponent = () => {
  return (
    <div className='suggested-profile'>
      <img className='rounded suggested-picture' src={lewis} alt='profile' />
      <div className='account-name'>lewiscampbell</div>
      <a href='/'>Segui</a>
    </div>
  );
};

export default SuggestedProfile;
