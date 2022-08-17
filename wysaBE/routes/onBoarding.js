import express, { Router } from 'express';
import {OnBoarding} from '../models/onBoarding';

const router = express.Router();

router.post('/', (req, res) => {

    const newOnBoarding = new OnBoarding({
            sleepStruggleDurationg: req.body.sleepStruggleDurationg,
            bedTime: req.body.bedTime,
            startTime: req.body.startTime,
            hrsOfSleepr: req.bodyhrsOfSleepr,
    });

    newOnBoarding.save()
        .then(onboard => res.json(onboard))
        .catch(err => console.log(err))
})


export const onBoarding = router