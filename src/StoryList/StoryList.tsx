import react from "react";
import "./StoryList.scss";
import lewis from "../assets/lewis.svg";
import StoryComponent from "../Story/Story";

const tmpData = [
  { account_name: "lewiscampbell", profile_picture: lewis },
  { account_name: "lewiscampbell", profile_picture: lewis },
  { account_name: "lewiscampbell", profile_picture: lewis },
  { account_name: "lewiscampbell", profile_picture: lewis },
  { account_name: "lewiscampbell", profile_picture: lewis },
  { account_name: "lewiscampbell", profile_picture: lewis },
];

const StoryList: react.FunctionComponent = () => {
  const stories = tmpData.map((story, key) => (
    <StoryComponent
      account_name={story.account_name}
      profile_picture={story.profile_picture}
      key={key}
    />
  ));
  return (
    <div className='story-list'>
      <div className='content'>{stories}</div>
    </div>
  );
};

export default StoryList;
