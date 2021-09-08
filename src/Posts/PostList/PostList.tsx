import react from "react";
import { IPost } from "../../_types/Post";
import Post from "../Post/Post";
import "./PostList.scss";

interface PostListProps {
  posts: IPost[];
}

const PostList: react.FunctionComponent<PostListProps> = ({posts}: PostListProps) => {
  const renderPosts = posts.map((post, key) => (
    <Post
      profile_name={post.profile_name}
      profile_fullname={post.profile_fullname}
      profile_picture={post.profile_picture}
      post_image={post.post_image}
      post_text={post.post_text}
      date={post.date}
      comments={post.comments}
      likes={post.likes}
      key={key}
    />
  ));
  return <div className='post-list'>{renderPosts}</div>;
};

export default PostList;
