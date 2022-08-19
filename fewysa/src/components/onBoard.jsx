import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const OnBoard = () => {
    const [wakeTime, setWakeTime] = useState('');
    const [sleepTime, setSleepTime] = useState('');
    const [hrsOfSleep, setHrsOfSleep] = useState(0);
    const [component, setComponent] = useState(null);

    useEffect(() => { //initial
        if (!component) setComponent(sleepStruggle);
    })

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleInput = e => {
        e.preventDefault();
        console.log(e.currentTarget.name);

    }

    const sleepStruggle = (
        <form>
            <div>
                <label>Less than 2 weeks </label>
                <input type='radio'></input>
            </div>

            <div>
                <label>2 to 8 weeks </label>
                <input type='radio'></input>
            </div>

            <div>
                <label>More than 8 weeks </label>
                <input type='radio'></input>
            </div>

            <button onClick={() => setComponent(goToBed)}>next</button>
        </form>
    )

    const goToBed = (
        <form>
            <p>What Time do you go to bed for sleep?</p>
            <input type='time' id='bedtime' onClick={handleInput} ></input>
            <button onClick={() => setComponent(wakeUpTime)}>next</button>
        </form>
    )

    const wakeUpTime = (
        <form>
            <input type='time' id='waketime' onClick={handleInput} ></input>
            <button onClick={() => setComponent(hrsSlept)}>next</button>
        </form>
    )

    const hrsSlept = (
        <form>
            <input type="number" />
            <button>Submit</button>
        </form>
    )


    return (
        <div>
            {component}
            {/* {goToBed} */}
        </div>
    )
}

export default OnBoard;