import react from 'react';
import "./Story.scss";

interface StoryProps {
    account_name: string;
    profile_picture: string;
    key: number;
}


const StoryComponent: react.FunctionComponent<StoryProps> = ({account_name, profile_picture}: StoryProps) => {
    return (
        <div className="story">
            <img className="rounded unread" src={profile_picture} alt={account_name} />
            <span className="account-name">{account_name}</span>
        </div>
    )
}

export default StoryComponent;