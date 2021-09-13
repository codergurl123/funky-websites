import React from "react";
import Post from "./post";

const Posts = (props) => {
  return (
    <div>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          caption={post.caption}
          date={post.dateString}
          imgUrl={post.imgUrl}
          comments={post.comments}
          addComment={props.addComment}
        />
      ))}
    </div>
  );
};

export default Posts;
