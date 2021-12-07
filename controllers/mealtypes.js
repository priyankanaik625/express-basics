
const mealtypes = require('../modules/mealtypes.json');

exports.getMealtypes = (req, res) => {
    res.status(200).json({ message: 'mealtypes found', mealtypes: mealtypes })
}