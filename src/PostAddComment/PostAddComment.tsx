import react from 'react';
import "./PostAddComment.scss";

const PostAddComment: react.FunctionComponent = () => {
    return (
        <div className="post-add-comment">
            <div className="label">Aggiungi un commento</div>
            <a href="/">Pubblica</a>
        </div>
    )
}

export default PostAddComment;