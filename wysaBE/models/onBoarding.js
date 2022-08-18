import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OnBoardingSchema = Schema({
    nickName: String,
    // password: Password,
    sleepStruggleDuration: String,
    bedTime: Date,
    wakeTime: Date,
    hrsOfSleep: Number,
    // userId: {
    //     type: Number,
    //     // require: true
    // }
}, {timestamps: true});

export const OnBoarding = mongoose.model('OnBoarding', OnBoardingSchema);