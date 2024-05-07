const { executeQuery } = require('../database/database');


const getVoterRegistration = (req,res) => {
    res.render("voter_registration");
}

const postVoterRegistration = async (req, res) => {
    console.log(req.body);
    let roll_no = req.body.roll_no;
    var query = `SELECT * FROM student WHERE rollnumber = ${roll_no};`;

    var results = await executeQuery(query);
    let voter_query = `select * from voter where rollnumber = ${roll_no}`;
    var voter_check = await executeQuery(voter_query);
    console.log(results[0]);
    if (results != "" && voter_check == "") {
        var new_query = `INSERT INTO voter VALUES (${results[0].rollnumber}, '${results[0].name}', '${req.body.password}', NULL, '${results[0].year}', '${results[0].degree}');`;
        var results_data = await executeQuery(new_query);
        console.log(new_query);
        res.status(200).json({ success: true, message: "Voter registration successful." });
    } else {
        res.status(400).json({ success: false, message: "Failed to register voter. Voter already registered or student not found." });
    }
};







module.exports = { getVoterRegistration, postVoterRegistration };