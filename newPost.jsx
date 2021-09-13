import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class NewPost extends Component {
  state = {
    caption: "",
    imgUrl: null,
  };

  handleFile = (event) => {
    this.setState({ imgUrl: URL.createObjectURL(event.target.files[0]) });
  };

  handleCaption = (event) => {
    this.setState({ caption: event.target.value });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Control
            onChange={this.handleCaption}
            as="textarea"
            placeholder="enter a caption..."
          />
          <label>Add an image...</label>
          <Form.File onChange={this.handleFile} />
          <Button
            onClick={() =>
              this.props.createPost(this.state.caption, this.state.imgUrl)
            }
            style={{
              color: "beige",
              backgroundColor: "lightblue",
              borderColor: "lightblue",
            }}
          >
            <Link to="/">Post</Link>
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewPost;
