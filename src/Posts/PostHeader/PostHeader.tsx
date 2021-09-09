import react from "react";
import { FaEllipsisH } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "./PostHeader.scss";

export interface PostHeaderProps {
  profile_picture?: string;
  profile_name?: string;
  profile_fullname?: string;
}

const PostHeader: react.FunctionComponent<PostHeaderProps> = ({
  profile_picture,
  profile_name,
  profile_fullname,
}: PostHeaderProps) => {
  return (
    <div className='post-header'>
      {profile_picture ? (
        <img
          className='rounded profile-picture unread link'
          src={profile_picture}
          alt={profile_name}
        />
      ) : (
        <Skeleton className="profile-picture" circle={true} width={40} height={40} />
      )}
      <div className='username link'>
        {profile_fullname || <Skeleton width={150} />}
      </div>
      {profile_picture ? <FaEllipsisH className="link" /> : <span></span>}
    </div>
  );
};

export default PostHeader;
