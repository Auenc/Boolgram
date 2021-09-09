import react from "react";
import PostActions from "../PostActions/PostActions";
import PostAddComment from "../PostAddComment/PostAddComment";
import PostCaption from "../PostCaption/PostCaption";
import { PostCommentProps } from "../PostComment/PostComment";
import PostCommentList from "../PostCommentList/PostCommentList";
import PostDate from "../PostDate/PostDate";
import PostHeader from "../PostHeader/PostHeader";
import PostLikes from "../PostLikes/PostLikes";
import "./Post.scss";

interface Like {
  username: string;
  profile_picture: string;
}

interface PDate {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface PostProps {
  profile_picture?: string;
  profile_name?: string;
  profile_fullname?: string;
  post_image?: string;
  post_text?: string;
  date?: PDate;
  comments?: PostCommentProps[];
  likes?: Like[];
  key: number;
}

const Post: react.FunctionComponent<PostProps> = ({
  profile_picture,
  profile_name,
  profile_fullname,
  post_image,
  post_text,
  date,
  comments,
  likes,
}: PostProps) => {
  const postDate = date ? new Date(date.date) : new Date();
  return (
    <div className='post'>
      <PostHeader
        profile_fullname={profile_fullname}
        profile_name={profile_name}
        profile_picture={profile_picture}
      />
      {profile_picture ? (
        <img className='post-image' src={post_image} alt={post_text} />
      ) : (
        <div className='loading-image'></div>
      )}
      {profile_picture ? <PostActions /> : <span></span>}
      {profile_picture ? <PostLikes likes={likes} /> : <span></span>}
      {profile_picture ? (
        <PostCaption username={profile_name} text={post_text} />
      ) : (
        <span></span>
      )}
      {profile_picture ? (
        <PostCommentList comments={comments} />
      ) : (
        <span></span>
      )}
      {profile_picture ? <PostDate date={postDate} /> : <span></span>}
      {profile_picture ? <PostAddComment /> : <span></span>}
    </div>
  );
};

export default Post;
