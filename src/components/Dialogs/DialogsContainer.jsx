import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },

        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 