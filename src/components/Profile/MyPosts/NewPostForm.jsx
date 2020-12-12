import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../common/validator';

const maxLength2 = maxLengthCreator(2);

const NewPostForm = props => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field 
                    placeholder="newPost" 
                    name="post" 
                    component="textarea"
                    validate={[ required, maxLength2 ]} 
                />
            </div>
            <div>
                <button type="submit">Add Post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({
    form: 'post'
})(NewPostForm);

export default NewPostReduxForm;
