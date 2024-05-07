const { executeQuery } = require('../database/database');

const getCandidateRegistration = (req,res) => {
    res.render("candidate_registration");
}


const postCandidateRegistration = async (req, res) => {
    console.log(req.body);
    let roll_no = req.body.roll_no;
    var query = `SELECT * FROM student WHERE rollnumber = ${roll_no};`;
    var results = await executeQuery(query);
    let voter_query = `select * from voter where rollnumber = ${roll_no}`;
    var voter_check = await executeQuery(voter_query);
    let password = voter_check[0]['Password'];
    let candidate_query = `select * from candidate where rollnumber = ${roll_no}`;
    var candidate_check = await executeQuery(candidate_query);
    console.log("-------------------");
    console.log(results[0].rollnumber);
    console.log("-------------------");
    if (results != "" && voter_check != "" && results[0].disciplinaryaction == 'no' && candidate_check == "" && req.body.password == password) {
        var new_query = `INSERT INTO candidate (rollnumber, name, position, number_of_votes) VALUES (${results[0].rollnumber}, '${results[0].name}', '${req.body.post}', NULL);`;
        var results_data = await executeQuery(new_query);
        console.log(new_query);
        res.status(200).json({ success: true, message: "Candidate registered successfully." });
    } else {
        res.status(400).json({ success: false, message: "Failed to register candidate. Please check if the student is eligible." });
    }
};



module.exports = {
    getCandidateRegistration, postCandidateRegistration
};