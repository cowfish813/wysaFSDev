import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

const saveOnBoard = createAction('SAVE_ONBOARD');

export const submitOnBoard = ob => async dispatch => {
    try {
        const res = await axios.post('http://localhost:5000/api/', ob)
        dispatch(saveOnBoard(res.data));
    } catch (err) {
        console.log(err);
    }
}