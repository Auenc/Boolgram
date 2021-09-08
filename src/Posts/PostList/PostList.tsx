import react from "react";
import Post from "../Post/Post";
import "./PostList.scss";

const tmpData = [
  {
    profile_picture:
      "https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
    profile_name: "kassulke.brice",
    profile_fullname: "Sharon Nolan",
    post_image:
      "https://flynn.boolean.careers/exercises/img/boolgram/landscape1.jpg",
    post_text: "You gave us three.",
    date: {
      date: "2021-09-07 11:08:53.000000",
      timezone_type: 3,
      timezone: "UTC",
    },
    comments: [
      {
        username: "adriana.kuhic",
        text: "Hatter.",
      },
    ],
    likes: [
      {
        username: "yrippin",
        profile_picture:
          "https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
      },
    ],
  },
];

const PostList: react.FunctionComponent = () => {
  console.log('tmp data', tmpData);
  const posts = tmpData.map((post, key) => (
    <Post
      profile_name={post.profile_name}
      profile_fullname={post.profile_fullname}
      profile_picture={post.profile_picture}
      post_image={post.post_image}
      post_text={post.post_text}
      date={post.date}
      comments={post.comments}
      likes={post.likes}
      key={key}
    />
  ));
  return <div className='post-list'>{posts}</div>;
};

export default PostList;
