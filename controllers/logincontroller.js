const { executeQuery } = require("../database/database");


const getLogin = (req,res) => {
    res.render("login");
}

const postLogin = async (req,res) => {
    console.log(req.body);
    var roll_no = req.body.roll_number;
    let voter_query = `select * from voter where rollnumber = ${roll_no}`;
    var voter_check = await executeQuery(voter_query);
    let password = voter_check[0]['Password'];
    var is_voted = voter_check[0]['Voted'];
    console.log(is_voted);
    if (req.body.password == password && !(is_voted === '1')) {
        let voted_query = `update voter set voted = 1 where rollnumber = ${roll_no};`;
        let execute = await executeQuery(voted_query);
        // console.log("hii");
        res.status(200).json({ success: true, message: "Login success" });
    } else {
        res.status(400).json({ success: false, message: "Failed to Login." });
    }
}

module.exports = {
    getLogin,
    postLogin
};