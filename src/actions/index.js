import axios from 'axios';  // package for making http request

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SHADOWG123';  //define by yourself, must be unique key

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);    //first arg(URL), second arg(data or object)

  return {  // Action
    type: CREATE_POST,
    payload: request
  };
}
