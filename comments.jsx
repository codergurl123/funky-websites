import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Comment from "./comment";
import "../styles/commentStream.css";

const Comments = (props) => {
  let commentStream = null;
  if (props.comments) {
    commentStream = (
      <div>
        {props.comments.map((comment) => (
          <Comment key={props.comments.indexOf(comment)} text={comment} />
        ))}
      </div>
    );
  }

  let commentField = (
    <div className="field">
      <div className="commentStream">
        <Image src="https://picsum.photos/seed/1/50" roundedCircle />
        <input
          type="text"
          id={props.postId}
          placeholder="leave a comment..."
          style={{ width: 640, border: 0 }}
        />
        <Button
          onClick={() =>
            props.addComment(
              props.postId,
              document.getElementById(props.postId).value
            )
          }
          style={{
            color: "beige",
            backgroundColor: "lightblue",
            borderColor: "beige",
          }}
        >
          Post
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      {commentStream}
      {commentField}
    </div>
  );
};

export default Comments;
