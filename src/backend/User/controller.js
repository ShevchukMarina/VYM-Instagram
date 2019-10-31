const User = require("./model");
//require('dotenv').config()

exports.getUsers  = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        console.log (err);
        res.status(400).send(err);
    }

};

