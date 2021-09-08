import react from "react";
import { FaEllipsisH } from "react-icons/fa";
import "./PostHeader.scss";

export interface PostHeaderProps {
  profile_picture: string;
  profile_name: string;
  profile_fullname: string;
}

const PostHeader: react.FunctionComponent<PostHeaderProps> = ({
  profile_picture,
  profile_name,
  profile_fullname,
}: PostHeaderProps) => {
  return (
    <div className='post-header'>
      <img
        className='rounded profile-picture unread'
        src={profile_picture}
        alt={profile_name}
      />
      <div className='username'>{profile_fullname}</div>
      <FaEllipsisH />
    </div>
  );
};

export default PostHeader;