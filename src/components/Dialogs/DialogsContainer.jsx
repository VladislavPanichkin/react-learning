import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialog-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let updateNewMessage = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <Dialogs sendMessage={sendMessage} updateNewMessage={updateNewMessage}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer; 