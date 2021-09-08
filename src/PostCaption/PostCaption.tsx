import react from "react";
import "./PostCaption.scss";

interface PostCaptionProps {
  username: string;
  text: string;
}

const PostCaption: react.FunctionComponent<PostCaptionProps> = ({
  username,
  text,
}: PostCaptionProps) => {
  return (
    <div className='post-caption'>
      <div className='username'>{username}</div>
      <div className='text'>{text}</div>
    </div>
  );
};

export default PostCaption;
