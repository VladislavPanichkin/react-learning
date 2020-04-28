import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.store.sendMessage()
        newMessage.current.value = ''
        props.store.updateNewMessageText('')
    }

    let onMessageChange = () => {
        let text = newMessage.current.value
        props.store.updateNewMessageText(text)
    }

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} userpic={d.userpic} />);
    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs_container}>
                <div className={s.dialogsItems}>
                    {messagesElements}
                    <div>
                        <textarea onChange={onMessageChange} value={props.state.dialogsPage.newMessageText} ref={newMessage}></textarea>
                    </div>
                    <div>
                        <button onClick ={ sendMessage }>
                            Add message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;