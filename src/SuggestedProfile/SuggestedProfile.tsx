import react from "react";
import "./SuggestedProfile.scss";

interface SuggestedProfileProps {
  profile_picture: string;
  profile_name: string;
}

const SuggestedProfile: react.FunctionComponent<SuggestedProfileProps> = ({
  profile_name,
  profile_picture,
}: SuggestedProfileProps) => {
  return (
    <div className='suggested-profile'>
      <img className='rounded suggested-picture' src={profile_picture} alt='profile' />
      <div className='account-name'>{profile_name}</div>
      <a href='/'>Segui</a>
    </div>
  );
};

export default SuggestedProfile;
