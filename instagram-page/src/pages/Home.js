
import "../App.css";
import mydata from "../data.json";
import Post from "../components/Post";
import { useState } from "react";

function Home() {
  const [state, setState] = useState(mydata);
  const myUserName = "sara.mcnvc";

  const likeHandler = (postId) => {
    const newData = state.map((item, index) => {
      if (item.id === postId) {
        let likes = item.likes;
        if (likes.includes(myUserName)) {
          //ako nase ime vec postoji u nizu lajkova da nas izbrise iz nza
          likes = likes.filter((u) => u !== myUserName);
        } else {
          likes.push(myUserName); //ako ne da nas doda u nizu
        }
        item.likes = likes; //azuriramo lajkove
      }
      return item;
    });
    setState(newData); //azurarmo novi niz
  };

  return (
    <div className="App">
      <div className="posts">
        {state.map((post) => (
          <Post
            key={post.id}
            post={post}
            likeHandler={likeHandler}
            myUsername={myUserName}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
