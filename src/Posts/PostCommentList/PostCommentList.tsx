import react from "react";
import PostComment, { PostCommentProps } from "../PostComment/PostComment";
import "./PostCommentList.scss";


interface PostCommentListProps {
  comments?: PostCommentProps[];
}

const PostCommentList: react.FunctionComponent<PostCommentListProps> = ({comments}: PostCommentListProps) => {
  if (!comments) {
    return <div className='post-comment-list'></div> 
  }
  const renderComments = comments.map((comment, key) => (
    <PostComment username={comment.username} text={comment.text} key={key} />
  ));

  return (
    <div className='post-comment-list'>
      <div className='label'>Mostra tutti e {comments.length} commenti</div>
      {renderComments}
    </div>
  );
};

export default PostCommentList;
