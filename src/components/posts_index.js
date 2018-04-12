import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

  componentDidMount() { // Must be typed correctly, otherwise, it will not be executed
    this.props.fetchPosts();
  }

  /* Make a helper function that display the posts,
  but not able to use map because the data format is object, not array */

  /* Use lodash to map (loop) the elements */
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>  {/* use key to list the items */}
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// map component to application level
function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);  // or {fetchPosts} ES6 syntax
