const { executeQuery } = require("../database/database");


const getCancelNomination = (req,res) => {
    res.render("cancellation_nomination");
}

const postCancelNomination = async (req,res) => {
    console.log(req.body);
    let roll_no = req.body.roll;
    var main_query = `delete from candidate where rollnumber = ${roll_no};`
    console.log(main_query);
    var query = `SELECT * FROM candidate WHERE rollnumber = ${roll_no};`;
    var results = await executeQuery(query);
    let voter_query = `select * from voter where rollnumber = ${roll_no}`;
    var voter_check = await executeQuery(voter_query);
    let password = voter_check[0]['Password'];
    console.log("-------------------");
    console.log(results[0].rollnumber);
    console.log(main_query);
    console.log("-------------------");
    if (results != "" && req.body.password == password) {
        console.log("hii");
        var results_data = await executeQuery(main_query);
        res.status(200).json({ success: true, message: "nomination cancelled successfully." });
    } else {
        res.status(400).json({ success: false, message: "Failed to cancel nomination." });
    }

}

module.exports = {
    getCancelNomination,
    postCancelNomination
};