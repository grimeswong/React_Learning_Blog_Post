import axios from 'axios';  // package for making http request

export const FETCH_POSTS = 'fetch_posts'; // fetch all post
export const FETCH_POST = 'fetch_post'; // fetch single post
export const CREATE_POST = 'create_post';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SHADOWG123';  //define by yourself, must be unique key

// function to get all the posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// function to create post and store it
export function createPost(values, callback) {
     //first arg(URL), second arg(data or object)
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {  // Action
    type: CREATE_POST,
    payload: request
  };
}

// function to get the particular post request by user
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request  /* payload: the data responsed by server */
  }
}

// function to delete a particular posts
export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}
