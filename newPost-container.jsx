import * as actions from "../data/actionTypes";
import { connect } from "react-redux";
import NewPost from "../components/newPost";

const mapStateToProps = (state) => {
  let { imageUrl } = state;
  return {
    imageUrl,
  };
};

const mapDispatchToProps = {
  createPost: (caption, imgUrl) => ({
    type: actions.CREATE_POST,
    payload: {
      caption,
      imgUrl,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
