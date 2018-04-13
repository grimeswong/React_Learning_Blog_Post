import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; /* Link is like anchor tag in html for navigate to different page,
but in react, only change the component when navigate to different page */

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
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">  {/* "to" for define the link where will navigate to */}
            Add a Post
          </Link>
        </div>
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
