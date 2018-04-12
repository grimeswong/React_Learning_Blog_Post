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

export default reduxForm({  // configuration:
  form: 'PostsNewForm'    // must be unique that not share the state with other form
})(PostsNew);
