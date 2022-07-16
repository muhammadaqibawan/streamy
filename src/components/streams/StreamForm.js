import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamForm = (props) => {

    const renderedError = ({ error, touched })=>{
        if(error && touched){
            return (
                <div className='ui error message'>
                    <div className='header'>
                        { error }
                    </div>
                </div>
            )
        }
    }

    const renderedInput = ({ input, label, meta })=>{
        const className = `field ${meta.error && meta.touched ?'error': ''}`
        return (
            <div className={className}>
                <label> { label } </label>
                <input {...input} autoComplete='off' />
                <div>{ renderedError(meta) }</div>
            </div>
        )
    }

    const onFormSubmit = (formValues)=>{
        props.onStreamCreate(formValues)
    }

    return (
        <form className='ui form error' onSubmit={props.handleSubmit(onFormSubmit)}>
           <Field name="title" component={renderedInput} type="text" label="Enter Title" />
           <Field name="description" component={renderedInput} type="text" label="Enter Description" />
           <button className='ui button primary'>Submit</button>
        </form>
    );
};

const validate = (formValues)=>{
    const error = {}
    if (!formValues.title){
        error.title = "Please enter title"
    } 

    if (!formValues.description){
        error.description = "Please enter description"
    } 
    return error
}

export default reduxForm({
    // a unique name for the form
    form: 'StreamForm',
    validate
  })(StreamForm)