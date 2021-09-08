import react from "react";
import "./SuggestedProfileList.scss";
import SuggestedProfile from "../SuggestedProfile/SuggestedProfile";
import { Profile } from "../_types/Profile";

interface SuggestedProfileListProps {
  profiles: Profile[]
}

const SuggestedProfileList: react.FunctionComponent<SuggestedProfileListProps> = ({profiles}: SuggestedProfileListProps) => {
  const suggestedProfiles = profiles.map((profile, key) => (
    <SuggestedProfile
      profile_name={profile.profile_name}
      profile_picture={profile.profile_picture}
      key={key}
    />
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
