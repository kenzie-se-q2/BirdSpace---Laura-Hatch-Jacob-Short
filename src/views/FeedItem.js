import React, { useContext, useEffect } from "react";
// import Likes from "";
// import datainfo from "../assets/data.json";
import { NewUserInfo } from '../components/SignUp';
import { birdPhotoRequest } from "../fetchRequests";

const FeedItem = (props) => {
<<<<<<< Updated upstream

  // useEffect(() => {
  //   birdPhotoRequest()
  // })
=======
    const newUser = useContext(NewUserInfo);
    
>>>>>>> Stashed changes
  return (
    <div className="feed-item">
      <h1>This will display the feed</h1>
    </div>
  );
};


export default FeedItem;

