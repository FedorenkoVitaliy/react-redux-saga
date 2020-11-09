import React from "react";
import Post from "./Post";

const FetchedPosts = ({ posts }) => {
  if(!posts.length){
    return <button className="btn btn-primary">Загрузить</button>
  }
  return posts.map((post, idx) => <Post post={post} key={idx}/>);
}
export default FetchedPosts;