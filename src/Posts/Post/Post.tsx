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
  profile_picture: string;
  profile_name: string;
  profile_fullname: string;
  post_image: string;
  post_text: string;
  date: PDate;
  comments: PostCommentProps[];
  likes: Like[];
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
  return (
    <div className='post'>
      <PostHeader
        profile_fullname={profile_fullname}
        profile_name={profile_name}
        profile_picture={profile_picture}
      />
      <img className='post-image' src={post_image} alt={post_text} />
      <PostActions />
      <PostLikes likes={likes} />
      <PostCaption username={profile_name} text={post_text} />
      <PostCommentList comments={comments} />
      <PostDate date={new Date(date.date)} />
      <PostAddComment />
    </div>
  );
};

export default Post;
