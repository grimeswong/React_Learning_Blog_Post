import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  // reduxForm function helper - wrap the postsNew component that communicate directly from this component to the reducer
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class PostsNew extends Component {
  renderField(field) { //  contain event handler is going to be responsible for making sure this field
    const { meta: {touched, error} } = field; {/* = const meta = field.meta */}
    const className = `form-group ? ${touched && error ? 'has-danger': ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        {/* equal below few lines */}
        {/* onChange={field.input.onChange }*/}
        {/* onFocus={field.input.onFocus }*/}
        {/* onBlur={field.input.onBlur }*/}

        {/* display error messages */}
        <div className="text-help">
          {touched ? error : '' } {/* If the field has been touched and the data is invalid, show the error message up, otherwise, show nothing */ }
        </div>

      </div>
    );
  }

  onSubmit(values) {
    // this === component
    // console.log(values);
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props; {/* = const handleSubmit = this.props.handleSubmit ES6 syntax */}

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};  // return the empty object if it's nothing wrong, otherwise return
  // console.log(values); // to check the value
  // if (values.title.length < 3) { // check it whether is less than 3 characters
  //   errors.title = "Title must be at least 3 characters";
  // }
  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = " Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({  // configuration:
  validate,     // or validate as ES5 (validate: validate, )
  form: 'PostsNewForm'    // must be unique that not share the state with other form
})( // connect two helpers
  connect(null, { createPost }) (PostsNew)  // connect multiple helpers
);
