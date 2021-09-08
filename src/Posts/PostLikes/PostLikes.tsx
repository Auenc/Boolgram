import react from "react";
import "./PostLikes.scss";

export interface Like {
  username: string;
  profile_picture: string;
}

interface PostLikesProps {
  likes: Like[];
}

const renderOthers = (likes: Like[]) => {
  if (likes.length > 1) {
    return (
      <span>
        <span className='muted'> e </span>
        {likes.length - 1} altri
      </span>
    );
  }
  return <span></span>;
};

const PostLikes: react.FunctionComponent<PostLikesProps> = ({
  likes,
}: PostLikesProps) => {
  const first = likes[0];
  if (!first) return <div className='post-likes'></div>;

  return (
    <div className='post-likes'>
      <img
        className='rounded liked-picture'
        src={first.profile_picture}
        alt='something'
      />
      <div className='description'>
        <span className='muted'>Piace a</span> {first.username}
        {renderOthers(likes)}
      </div>
    </div>
  );
};

export default PostLikes;
