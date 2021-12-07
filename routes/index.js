const express = require('express');
const locationsController = require('../controllers/locations.js');
const mealtypesController = require('../controllers/mealtypes');
const restauranstController = require('../controllers/restaurants')

//Create a route using express
const route = express.Router();

//Register a get method - Every function handles certain API's
route.get('/locations', locationsController.getLocations);
route.get('/mealtypes', mealtypesController.getMealtypes );
route.get('/restaurants/:city', restauranstController.getRestaurantByCity)

module.exports = route;