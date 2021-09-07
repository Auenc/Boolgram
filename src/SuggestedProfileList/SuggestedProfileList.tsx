import react from "react";
import "./SuggestedProfileList.scss";
import lewis from "../assets/lewis.svg";
import SuggestedProfile from "../SuggestedProfile/SuggestedProfile";

const tmpProfiles = [
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
  {
    profile_picture: lewis,
    profile_name: "lewiscampbell",
  },
];

const SuggestedProfileList: react.FunctionComponent = () => {
  const suggestedProfiles = tmpProfiles.map((profile, key) => (
    <SuggestedProfile />
  ));
  return (
    <div className='suggested-profiles'>
      <div className='header'>
        <div className='suggestion'>Suggerimenti per te</div>
        <div className='action'>Monstra tutti</div>
      </div>
      {suggestedProfiles}
    </div>
  );
};

export default SuggestedProfileList;
