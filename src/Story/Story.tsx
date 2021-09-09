import react from "react";
import Skeleton from "react-loading-skeleton";
import "./Story.scss";

interface StoryProps {
  account_name?: string;
  profile_picture?: string;
  key: number;
}

const StoryComponent: react.FunctionComponent<StoryProps> = ({
  account_name,
  profile_picture,
}: StoryProps) => {
  return (
    <div className='story'>
      {profile_picture ? (
        <img
          className='rounded unread link'
          src={profile_picture}
          alt={account_name}
        />
      ) : (
        <Skeleton circle={true} height={75} width={75} />
      )}
      <span className='account-name link'>{account_name}</span>
    </div>
  );
};

export default StoryComponent;
