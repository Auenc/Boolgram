import react from "react";
import Skeleton from "react-loading-skeleton";
import "./SuggestedProfile.scss";

interface SuggestedProfileProps {
  profile_picture?: string;
  profile_name?: string;
}

const SuggestedProfile: react.FunctionComponent<SuggestedProfileProps> = ({
  profile_name,
  profile_picture,
}: SuggestedProfileProps) => {
  return (
    <div className='suggested-profile'>
      {profile_picture ? (
        <img
          className='rounded suggested-picture'
          src={profile_picture}
          alt='profile'
        />
      ) : (
        <Skeleton className="suggested-picture" circle={true} height={50} width={50} />
      )}
      <div className='account-name'>{profile_name || <Skeleton width={150}/>}</div>
      {profile_name ? <a href='/'>Segui</a> : <span></span>}
    </div>
  );
};

export default SuggestedProfile;
