import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const OnBoard = () => {
    const [wakeTime, setWakeTime] = useState('');
    const [sleepTime, setSleepTime] = useState('');
    const [hrsOfSleep, setHrsOfSleep] = useState(0)
    const [component, setComponent] = useState(<></>)
    useEffect(() => { //initial
        setComponent(goToBed);
    })

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleInput = e => {
        e.preventDefault();
        console.log(e.currentTarget.name);

    }

    const goToBed = (
        <div>
            <input type='time' id='bedtime' onClick={handleInput} ></input>
            <button onClick={setComponent(wakeUpTime)}>next</button>
        </div>
    )

    const wakeUpTime = (
        <div>
            <input type='time' id='waketime' onClick={handleInput} ></input>
            <button onClick={setComponent(hrsSlept)}>next</button>
        </div>
    )

    const hrsSlept = (
        <div>
            <input type="number" />
        </div>
    )


    return (
        <div>sdfgsdgdsf
            <div>
                {component}
            </div>
        </div>
    )
}

export default OnBoard;