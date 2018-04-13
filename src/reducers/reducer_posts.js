import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) { //default state to an object
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); //if the state object has a key of the post id, just drop it
    case FETCH_POST:
      console.log("Fetching Single Post..."); // debugger:

    /* ES5 Syntax */
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;

    /* ES6 Syntax */
    return { ...state, [action.payload.data.id]: action.payload.data};  /* first is making key for this object(not array), second is the value of this object */

    case FETCH_POSTS:
      console.log("Fetching All Posts...");
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
