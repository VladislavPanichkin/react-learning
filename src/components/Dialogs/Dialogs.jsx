import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageReduxForm from './MessageForm';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} userpic={d.userpic} key={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);

    const onSubmit = formData => props.sendMessage(formData.message)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs_container}>
                <div className={s.dialogsItems}>
                    {messagesElements}
                    <MessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

