import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) { //default state to an object
  switch (action.type) {
    case FETCH_POSTS:
      console.log("FETCING POSTING...");
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
