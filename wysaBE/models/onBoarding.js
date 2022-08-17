import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OnBoardingSchema = Schema({
    sleepStruggleDuration: String,
    bedTime: Date,
    startTime: Date,
    hrsOfSleep: Number,
    // userId: {
    //     type: Number,
    //     // require: true
    // }
}, {timestamps: true});

export const OnBoarding = mongoose.model('OnBoarding', OnBoardingSchema);