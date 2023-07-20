const asyncHandler = require('express-async-handler')
// @desc    Get goals
// @route   Get/api/goals
// @acces   Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "set goals" })
})

// @desc    Set goal
// @route   POSt/api/goals
// @acces   Private

const postGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "set goals" })
})

// @desc    Update goal
// @route   PUT/api/goals/:id
// @acces   Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})

// @desc    Delete goal
// @route   DELETE/api/goals
// @acces   Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})


module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}