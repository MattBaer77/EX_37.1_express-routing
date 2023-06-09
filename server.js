const express = require('express');
const ExpressError = require('./expressError')
const {mean} = require('./mean')
const {median} = require('./median')
const {mode} = require('./mode')
const {convert} = require('./convert')

const app = express();

app.use(express.json())

// all get routes

app.get('/mean', (req, res, next) => {

    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums and a value of a comma-separated list of numbers.', 400)
    }

    const stringNums = req.query.nums.split(',');
    const nums = convert(stringNums)

    if (nums.includes(NaN)) {
        throw new ExpressError('Values in nums string must be numbers.', 400)
    }

    const meanNums = mean(nums)

    const r = {
        operation: "mean",
        value: meanNums
    }

    return res.json(r)

})

app.get('/median', (req, res, next) => {

    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums and a value of a comma-separated list of numbers.', 400)
    }

    const stringNums = req.query.nums.split(',');
    const nums = convert(stringNums)

    if (nums.includes(NaN)) {
        throw new ExpressError('Values in nums string must be numbers.', 400)
    }

    const medianNums = median(nums)

    const r = {
        operation: "median",
        value: medianNums
    }

    return res.json(r)

})

app.get('/mode', (req, res, next) => {

    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums and a value of a comma-separated list of numbers.', 400)
    }

    const stringNums = req.query.nums.split(',');
    const nums = convert(stringNums)

    if (nums.includes(NaN)) {
        throw new ExpressError('Values in nums string must be numbers.', 400)
    }

    const modeNums = mode(nums)

    const r = {
        operation: "mode",
        value: modeNums
    }

    return res.json(r)

})

app.use((req, res, next) => {

    const e = new ExpressError("Page Not Found", 404);
    next(e)

})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({
        error: {message, status}
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
  });