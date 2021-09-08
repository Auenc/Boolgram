import react from 'react';
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import "./PostActions.scss";

const PostActions: react.FunctionComponent = () => {
    return (
        <div className="post-actions">
          <FaRegHeart size={25} />
          <FaRegComment size={25} />
      </div>
    );
}

export default PostActions;