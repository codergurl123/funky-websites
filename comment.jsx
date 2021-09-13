import React from "react";
import Image from "react-bootstrap/Image";
import "../styles/comment.css";

const Comment = (props) => {
  return (
    <div align="left" className="comment">
      <Image src="https://picsum.photos/seed/1/50" roundedCircle />
      <span>{props.text}</span>
    </div>
  );
};

export default Comment;
