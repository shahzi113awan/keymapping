const express = require('express');
const router = express.Router();
const { getGoals, postGoal, updateGoal, deleteGoal } = require('../controller/goalControler')

router.route('/').get(getGoals).post(postGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router