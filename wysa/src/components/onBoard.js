import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const onBoard = () => {
    const [wakeTime, setWakeTime] = useState('');
    const [sleepTime, setSleepTime] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }
}
