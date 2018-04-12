import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  // reduxForm function helper - wrap the postsNew component that communicate directly from this component to the reducer

class PostsNew extends Component {
  renderField(field) { //  contain event handler is going to be responsible for making sure this field
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        {/* equal below few lines */}
        {/* onChange={field.input.onChange }*/}
        {/* onFocus={field.input.onFocus }*/}
        {/* onBlur={field.input.onBlur }*/}
      </div>
    );
  }

  render() {
    return(
      <form>
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
      </form>
    );
  }
}

function validate(values) {
  const errors = {};  // return the empty object if it's nothing wrong, otherwise return
  console.log(values); // to check the value
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
    errors.categories = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({  // configuration:
  validate,     // or validate as ES5 (validate: validate, )
  form: 'PostsNewForm'    // must be unique that not share the state with other form
})(PostsNew);
