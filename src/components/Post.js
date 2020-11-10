import React from "react";

const Posts = ({ post }) => {
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
        </h5>
      </div>
    </div>
  )
}
export default Posts;