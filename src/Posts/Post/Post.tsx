import react from "react";
import { IPost } from "../../_types/Post";
import PostActions from "../PostActions/PostActions";
import PostAddComment from "../PostAddComment/PostAddComment";
import PostCaption from "../PostCaption/PostCaption";
import { PostCommentProps } from "../PostComment/PostComment";
import PostCommentList from "../PostCommentList/PostCommentList";
import PostDate from "../PostDate/PostDate";
import PostHeader from "../PostHeader/PostHeader";
import PostLikes from "../PostLikes/PostLikes";
import "./Post.scss";

interface PostProps {
  post: IPost
  addCommentToPost: (post: IPost, comment: PostCommentProps) => void
}

const Post: react.FunctionComponent<PostProps> = ({post, addCommentToPost} : PostProps) => {
  const postDate = post.date ? new Date(post.date.date) : new Date();

  const addComment = (comment: PostCommentProps) => {
    addCommentToPost(post, comment);
  };

  return (
    <div className='post'>
      <PostHeader
        profile_fullname={post.profile_fullname}
        profile_name={post.profile_name}
        profile_picture={post.profile_picture}
      />
      {post.profile_picture ? (
        <img className='post-image' src={post.post_image} alt={post.post_text} />
      ) : (
        <div className='loading-image'></div>
      )}
      {post.profile_picture ? <PostActions /> : <span></span>}
      {post.profile_picture ? <PostLikes likes={post.likes} /> : <span></span>}
      {post.profile_picture ? (
        <PostCaption username={post.profile_name} text={post.post_text} />
      ) : (
        <span></span>
      )}
      {post.profile_picture ? (
        <PostCommentList comments={post.comments} />
      ) : (
        <span></span>
      )}
      {post.profile_picture ? <PostDate date={postDate} /> : <span></span>}
      {post.profile_picture ? <PostAddComment addComment={addComment} /> : <span></span>}
    </div>
  );
};

export default Post;
