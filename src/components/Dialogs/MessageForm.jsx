import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"message"} component={"input"} />
            </div>
            <div>
                <button>
                    Add message
                </button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'message'
})(MessageForm);

export default MessageReduxForm;