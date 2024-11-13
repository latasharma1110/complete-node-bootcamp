const Tour = require('../models/tour');

exports.getAll = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      data: tours,
      message: 'Tours fetched successfully.',
      results: tours.length,
      status: 'success'
    });
  } catch (err) {
    res.status(400).json({
      message: err,
      status: 'fail'
    });
  }
};

exports.create = async (req, res) => {
  try {
    // const newTour = new Tour(req.body)
    // newTour.save()

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      data: newTour,
      message: 'Tour created successfully.',
      status: 'success'
    });
  } catch (err) {
    res.status(400).json({
      message: err,
      status: 'fail'
    });
  }
};

exports.get = async (req, res) => {
  try {
    const tour = await Tour.findById(req?.params?.id);

    res.status(200).json({
      data: tour,
      message: 'Tour fetched successfully.',
      status: 'success'
    });
  } catch (err) {
    res.status(400).json({
      message: err,
      status: 'fail'
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      { _id: req?.params?.id },
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      data: updatedTour,
      message: 'Tour updated successfully.',
      status: 'success'
    });
  } catch (err) {
    res.status(400).json({
      message: err,
      status: 'fail'
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req?.params?.id);

    res.status(200).json({
      message: 'Tour deleted successfully.',
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      message: err,
      status: 'fail'
    });
  }
};
