import React from 'react';
import "../styles/Feed.css";
import Tweetbox from "../components/Tweetbox";
import Post from "../components/Post";

function Feed(){
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox/>

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>


    </div>
  )
}

export default Feed;
