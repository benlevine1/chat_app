import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../common/input';

const SetNameForm = ({handleSubmit, onSubmit}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <Field name="name" size="s12 m8 offset-m2" label="Enter Your Name" component={Input}/>
    </div>
    <div className="row">
      <div className="col s12 center">
        <button className="button btn-large blue darken-2">Set Name</button>
      </div>
    </div>
  </form>
);

const validate = ({name}) => name ? {} : { name: "Please Enter Your Name"}

export default reduxForm({
  form: 'set-name',
  validate
})(SetNameForm);