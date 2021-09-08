import react from "react";
import moment from "moment";
import "./PostDate.scss";

interface PostDateProps {
    date: Date
}

const PostDate: react.FunctionComponent<PostDateProps> = ({date}: PostDateProps) => {
  return <div className='post-date'>{moment(date).fromNow()}</div>;
};

export default PostDate;
