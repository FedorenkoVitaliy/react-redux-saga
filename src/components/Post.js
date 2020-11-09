import React from "react";

const Posts = ({ post }) => {
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Post {post}
        </h5>
      </div>
    </div>
  )
}
export default Posts;