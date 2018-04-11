import axios from 'axios';  // package for making http request

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPAERCLIP1234';  //unique key

export function fetchPosts() {
  const request = axious.get(`${ROOT_URL}/posts${API_KEY}`);


  return {
    type: FETCH_POSTS,
    payload: request
  };
}
