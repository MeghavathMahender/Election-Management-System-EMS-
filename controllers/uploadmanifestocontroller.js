const { executeQuery } = require("../database/database");

const getUploadManifesto = (req,res) => {
    res.render("upload_manifesto");
}


const postUploadManifesto = async (req, res) => {
    console.log(req.body);
    let roll_no = req.body.roll_no;
    var main_query = `UPDATE candidate SET manifesto = '${req.body.manifesto}' WHERE rollnumber = ${req.body.roll_no};`
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
        res.status(200).json({ success: true, message: "Manifesto uploaded successfully." });
    } else {
        res.status(400).json({ success: false, message: "Failed to register candidate. Please check if the student is eligible." });
    }
};


module.exports = {
    getUploadManifesto,
    postUploadManifesto
};