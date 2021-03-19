import React from 'react';
import "../styles/Feed.css";
import Tweetbox from "../components/Tweetbox";
import Post from "../components/Post";

function Feed(){
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweet */}

      <Tweetbox/>

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>


    </div>
  )
}

export default Feed;
