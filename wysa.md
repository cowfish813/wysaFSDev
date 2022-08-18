* Backend
    - BE can be established with noSQL and MongoDB. 
    
    - The Schema for onboarding can hold on to the data pointing to "sleep struggle duration" which points to one of the text options, bedTime/wakeTime noted by some kind of date, and hoursOfSleep represented as an integer.
    
    The schema, imported by mongoose, can look something like...

        const OnBoardingSchema = Schema({
            sleepStruggleDuration: String,
            bedTime: Date,
            wakeTime: Date,
            hrsOfSleep: Number,
        }, {timestamps: true});



    - Routes for onboarding can be processed with just the Post option, since no data is being read, deleted, or updated as this is a new user. 


* Frontend
    - between the screens, data can be stored in it's global state before finaly being sent over to the backend where it can be saved to the database

    - When a user makes an action, eg clicking a time on a clock, data can be stored in localState. As the user contineus to click all the way through, They'll dispatch an action that allows the user to 'post', updating the backend and eventually being read on frontend

