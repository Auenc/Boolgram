import react from 'react';
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import "./PostActions.scss";

const PostActions: react.FunctionComponent = () => {
    return (
        <div className="post-actions">
          <FaRegHeart className="link" size={25} />
          <FaRegComment className="link" size={25} />
      </div>
    );
}

export default PostActions;