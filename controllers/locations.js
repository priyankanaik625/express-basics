//import the modal - means json data
const locations = require('../modules/locations.json');

//Controller Method - All the Logic goes here
exports.getLocations = (req, res) => {
    res.status(200).json({message: 'Locations Fetched sucessfully', locations: locations})
}