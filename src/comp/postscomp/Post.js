import React from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate(`/post/${post.id}`, { state: post });
  };
  return (
    <>
      <div className="card" onClick={handleclick}>
        <h5 className="card-header">{post.title}</h5>
        {/* <div className="card-body"> */}
        <p className="card-text">{post.body}</p>
      </div>
      {/* </div>  */}
    </>
  );
};

export default Post;
