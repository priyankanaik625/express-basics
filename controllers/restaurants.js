const restaurants = require('../modules/restaurants.json');
exports.getRestaurantByCity = (req, res) => {
    
    const {city} = req.params;
    
    const filteredRestaurants = restaurants.filter(item => item.city === city)

    res.status(200).json({restaurants: filteredRestaurants})
}