import { connect } from "react-redux";
import * as actions from "../data/actionTypes";
import Posts from "../components/posts";

const mapStateToProps = (state) => {
  let posts = state.posts.sort((a, b) => b.time - a.time);
  return {
    posts,
  };
};

const mapDispatchToProps = {
  addComment: (postId, comment) => ({
    type: actions.ADD_COMMENT,
    payload: {
      postId,
      comment,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
