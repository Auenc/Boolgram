import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHome } from "react-icons/fa";
import "./App.scss";
import lewis from "../assets/lewis.svg";
import MyProfile from "../my-profile/MyProfile";
import SuggestedProfileList from "../SuggestedProfileList/SuggestedProfileList";
import StoryList from "../StoryList/StoryList";
import PostList from "../Posts/PostList/PostList";
import { Profile } from "../_types/Profile";
import { getAllProfiles } from "../_services/ProfileService";
import { IPost } from "../_types/Post";
import { getAllPosts } from "../_services/PostService";
import { Story } from "../_types/Story";
import { getAllStories } from "../_services/StoryService";
import { PostCommentProps } from "../Posts/PostComment/PostComment";


const App : React.FunctionComponent = () => {
  const [profiles, setProfiles] = useState<Array<Profile>>([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [posts, setPosts]  = useState<Array<IPost>>([{}]);
  const [stories, setStories] = useState<Array<Story>>([{}, {}, {}, {}, {}])

  const retrieveProfiles = async () => {
    const profiles = await getAllProfiles();
    setProfiles(profiles);
  }

  const retrievePosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts);
  }

  const retrieveStories = async () => {
    const stories = await getAllStories();
    setStories(stories);
  }

  useEffect(() => {
    retrieveProfiles()
    retrievePosts();
    retrieveStories();
  }, [])

  const addCommentToPost = (toFind: IPost, comment: PostCommentProps) => {
    posts.forEach((post, i) => {
      if (post === toFind){
        const newComments = [...post.comments || [], comment]
        const newPosts = Object.assign([...posts],{
          [i]: {
            ...post,
            comments: newComments
          }
        })
        setPosts(newPosts)
      }
    })
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='header-content'>
          <span className='logo link'>Boolgram</span>
          <input className='search' type='text' placeholder='Cerca' />
          <div className='actions'>
            <FaRegHeart className="link" size={25} />
            <FaHome className="link" size={25} />
            <img
              src={lewis}
              className='rounded-img my-profile'
              alt='my-profile'
            />
          </div>
        </div>
      </header>
      <div className='content-container'>
        <div className='feed'>
          <StoryList stories={stories} />
          <PostList addCommentToPost={addCommentToPost} posts={posts} />
        </div>
        <div className='sidebar'>
          <MyProfile />
          <SuggestedProfileList profiles={profiles} />
          <span className="copyright">&copy; 2021 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    </div>
  );
}

export default App;
