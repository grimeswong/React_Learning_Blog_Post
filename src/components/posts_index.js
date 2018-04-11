import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDiDMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts:fetchPosts })(PostsIndex);  // or {fetchPost} ES6 syntax
