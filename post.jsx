import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Comments from "./comments";
import "../styles/post.css";

const Post = (props) => {
  if (!props.imgUrl) {
    return (
      <div align="center">
        <Card.Header>
          <div className="PostHeading">
            <div className="ProfilePic">
              <Image src="https://picsum.photos/50" roundedCircle />
            </div>
            <div>
              <Card.Title style={{ fontWeight: "bold", marginLeft: 5 }}>
                {props.username}
              </Card.Title>
              <Card.Subtitle style={{ marginLeft: 5, alignSelf: "left" }}>
                {props.date}
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text align="left">{props.caption}</Card.Text>
        </Card.Header>
        <Comments
          comments={props.comments}
          addComment={props.addComment}
          postId={props.id}
        />
      </div>
    );
  } else {
    return (
      <div align="center">
        <Card style={{ width: 640, height: 700 }}>
          <Card.Header>
            <div className="PostHeading">
              <div className="ProfilePic">
                <Image
                  src="https://picsum.photos/seed/picsum/50"
                  roundedCircle
                />
              </div>
              <div>
                <Card.Title style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {props.username}
                </Card.Title>
                <Card.Subtitle style={{ marginLeft: 5, alignSelf: "left" }}>
                  {props.date}
                </Card.Subtitle>
              </div>
            </div>
            <Card.Text align="left">{props.caption}</Card.Text>
          </Card.Header>
          <Card.Body align="left">
            <Card.Img
              variant="top"
              src={props.imgUrl}
              width="640"
              height="550"
            />
          </Card.Body>
        </Card>
        <Comments
          comments={props.comments}
          addComment={props.addComment}
          postId={props.id}
        />
      </div>
    );
  }
};

export default Post;
