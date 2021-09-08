import react from 'react';
import "./PostComment.scss";

export interface PostCommentProps {
    username: string;
    text: string;
}

const PostComment: react.FunctionComponent<PostCommentProps> = ({username, text}: PostCommentProps) => {
    return (
        <div className="post-comment">
            <span className="username">{username}</span>
            <span className="comment">{text}</span>
        </div>
    )
}

export default PostComment;