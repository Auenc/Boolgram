import react, { useState } from "react";
import { FaBan } from "react-icons/fa";
import { PostCommentProps } from "../PostComment/PostComment";
import "./PostAddComment.scss";

interface PostAddCommentProps {
  addComment: (comment: PostCommentProps) => void;
}

const notCommenting = (
  setCommenting: react.Dispatch<react.SetStateAction<boolean>>
) => {
  return (
    <div className='label' onClick={() => setCommenting(true)}>
      Aggiungi un commento
    </div>
  );
};

const PostAddComment: react.FunctionComponent<PostAddCommentProps> = ({
  addComment,
}: PostAddCommentProps) => {
  const [comment, setComment] = useState<string>("");
  const [commenting, setCommenting] = useState<boolean>(false);
  const submitComment = (event: react.SyntheticEvent) => {
    event.preventDefault();
    setComment("");
    addComment({
        text: comment,
        username: 'lewiscampbell',
    })
  };
  const cancelComment = () => {
      setComment("")
      setCommenting(false);
  }
  return (
    <div className='post-add-comment'>
      {commenting ? (
        <form className='comment-form' onSubmit={submitComment}>
          <input
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='comment-input'
            placeholder='Aggiungi un commento'
            autoFocus
          />
          <FaBan onClick={cancelComment} className="cancel" />
        </form>
      ) : (
        notCommenting(setCommenting)
      )}
      <a href='/'>Pubblica</a>
    </div>
  );
};

export default PostAddComment;
