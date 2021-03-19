import React from 'react';
import '../styles/Tweetbox.css';
import {Avatar, Button} from "@material-ui/core";


function Tweetbox() {
  return(
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src=""/>
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox;
