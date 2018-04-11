import _ from 'loadash'
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) { //default state to an object
  switch (action.type) {
    case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
