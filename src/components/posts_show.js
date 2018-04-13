import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);

  }
  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  };
}

function mapStateToProps({ posts }, ownProps) { /* first arg= application state, second arg = ownProps(pass props to this props) */
  return { post: posts[ownProps.match.parames.id] };  /* return only single post */
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
