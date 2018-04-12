import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() { // Must be typed correctly, otherwise, it will not be executed
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);  // or {fetchPosts} ES6 syntax
