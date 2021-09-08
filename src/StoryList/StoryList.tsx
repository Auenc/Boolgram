import react from "react";
import "./StoryList.scss";
import StoryComponent from "../Story/Story";
import { Story } from "../_types/Story";

interface StoryListProps {
  stories: Story[]
}

const StoryList: react.FunctionComponent<StoryListProps> = ({stories}: StoryListProps) => {
  const renderStories = stories.map((story, key) => (
    <StoryComponent
      account_name={story.profile_name}
      profile_picture={story.profile_picture}
      key={key}
    />
  ));
  return (
    <div className='story-list'>
      <div className='content'>{renderStories}</div>
    </div>
  );
};

export default StoryList;
