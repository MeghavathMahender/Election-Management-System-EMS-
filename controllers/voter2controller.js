const { executeQuery } = require('../database/database');


const getVoterRegistration = (req,res) => {
    res.render("voter2");
}

// var postVoterRegistration = (req, res) => {
//     const formData = req.body;
//     console.log(formData);
// }


module.exports = {
    getVoterRegistration
    // postVoterRegistration
};