import * as actions from "../data/actionTypes";
import { v4 as uuidv4 } from "uuid";

export function posts(
  state = [
    {
      id: uuidv4(),
      username: "Divu Whippet",
      caption: "I love this pic! #throwbackthursday",
      time: getDate().milliseconds,
      dateString: getDate().string,
      imgUrl: "https://picsum.photos/640/600",
      comments: [],
    },
  ],
  action
) {
  switch (action.type) {
    case actions.CREATE_POST:
      return [
        ...state,
        {
          id: uuidv4(),
          username: "Bit",
          caption: action.payload.caption,
          time: getDate().milliseconds,
          dateString: getDate().string,
          imgUrl: action.payload.imgUrl,
          comments: [],
        },
      ];
    case actions.ADD_COMMENT:
      return state.map((post) =>
        post.id === action.payload.postId
          ? { ...post, comments: [...post.comments, action.payload.comment] }
          : post
      );
    default:
      return state;
  }
}

function getDate() {
  var time = new Date().getTime();
  var date = new Date(time);
  return { milliseconds: time, string: date.toUTCString() };
}
