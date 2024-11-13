const express = require('express');
const tour = require('./../controllers/tour');

const router = express.Router();

// router
//   .route('/top-5-cheap')
//   .get(tour.aliasTopTours, tour.getAllTours);

// router.route('/tour-stats').get(tour.getTourStats);
// router.route('/monthly-plan/:year').get(tour.getMonthlyPlan);

router
  .route('/')
  .get(tour.getAll)
  .post(tour.create);

router
  .route('/:id')
  .get(tour.get)
  .patch(tour.update)
  .delete(tour.delete);

module.exports = router;
