import react from "react";
import { IPost } from "../../_types/Post";
import Post from "../Post/Post";
import { PostCommentProps } from "../PostComment/PostComment";
import "./PostList.scss";

interface PostListProps {
  posts: IPost[];
  addCommentToPost: (post: IPost, comment: PostCommentProps) => void
}

const PostList: react.FunctionComponent<PostListProps> = ({posts, addCommentToPost}: PostListProps) => {
  const renderPosts = posts.map((post, key) => (
    <Post post={post} key={key} addCommentToPost={addCommentToPost} />
  ));
  return <div className='post-list'>{renderPosts}</div>;
};

export default PostList;
