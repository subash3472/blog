// import React, { useState } from "react";
import "./Home.css";
import Post from "../../comp/postscomp/Post";
import Usefetch from "../../hooks/Usefetch";

const Home = () => {
  // buying data from usefetchpage
  const {
    data: posts,
    error,
    network,
  } = Usefetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <div className="container">
        {posts &&
          posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}

        {error && <h3>{error}</h3>}
        {network && <h2>please wait loading......</h2>}
      </div>
    </>
  );
};

export default Home;
