import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  // reduxForm function helper - wrap the postsNew component that communicate directly from this component to the reducer

class PostsNew extends Component {
  renderTitleField(field) { //  contain event handler is going to be responsible for making sure this field
    return(
      <div>
        <input
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
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({  // configuration:
  form: 'PostsNewForm'    // must be unique that not share the state with other form
})(PostsNew);
