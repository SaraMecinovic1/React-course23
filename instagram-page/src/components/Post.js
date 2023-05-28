import React from "react";
import likedIcon from "../components/heart.png";
import unLikedIcon from "../components/heart-3.png";

const Post = (props) => {
  const isLikedByMe = props.post.likes.includes(props.myUserName);
  let likeButton = unLikedIcon;
  if (isLikedByMe) {
    likeButton = likedIcon;
  }

  return (
    <div className="post">
      <div>
        <img className="post-img" src={props.post.imageUrl} />
      </div>
      <div className="post-buttons">
        <button
          className="post-likes"
          onClick={() => {
            props.likeHandler(props.post.id);
          }}
          style={{ paddingRight: "10px", paddingLeft: "10px" }}
        >
          <img src={likeButton} width="10px" />
        </button>
        <button onClick={() => console.log("comments")}>Comment</button>
        <button onClick={() => console.log("share")}>Share</button>
      </div>

      <div>
        <p className="post-likes">{props.post.likes.length} likes</p>
        <p className="post-description">
          <span className="username">{props.post.username}</span>{" "}
          <span>{props.post.description}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
