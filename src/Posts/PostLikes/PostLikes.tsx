import react from "react";
import "./PostLikes.scss";

export interface Like {
  username: string;
  profile_picture: string;
}

interface PostLikesProps {
  likes?: Like[];
}

const renderOthers = (likes: Like[]) => {
  if (likes.length > 1) {
    return (
      <span>
        <span className='muted'> e </span>
        <span className='link'>{likes.length - 1} altri</span>
      </span>
    );
  }
  return <span></span>;
};

const PostLikes: react.FunctionComponent<PostLikesProps> = ({
  likes,
}: PostLikesProps) => {
  if (!likes) {
    return <div className='post-likes'></div>;
  }
  const first = likes[0];
  if (!first) return <div className='post-likes'></div>;

  return (
    <div className='post-likes'>
      <img
        className='rounded liked-picture link'
        src={first.profile_picture}
        alt='something'
      />
      <div className='description'>
        <span className='muted'>Piace a </span>
        <span className='link'>{first.username}</span>
        {renderOthers(likes)}
      </div>
    </div>
  );
};

export default PostLikes;
