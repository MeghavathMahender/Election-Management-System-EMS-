const { executeQuery } = require("../database/database");

var candidate_data;

const getVotting = async (req,res) => {
    let query = "select name,position from candidate;";
    candidate_data =await executeQuery(query);
    // console.log(candidate_data);
    res.render("votting", {candidate_data:candidate_data});
}

const postVotting = async (req, res) => {
    try {
        console.log(req.body);
        const { president, vp, gstb, gscb, gssb, gswb } = req.body;
        const queries = [
            `UPDATE candidate SET number_of_votes = COALESCE(number_of_votes, 0) + 1 WHERE name = '${president}';`,
            `UPDATE candidate SET number_of_votes = COALESCE(number_of_votes, 0) + 1 WHERE name = '${vp}';`,
            `UPDATE candidate SET number_of_votes = COALESCE(number_of_votes, 0) + 1 WHERE name = '${gstb}';`,
            `UPDATE candidate SET number_of_votes = COALESCE(number_of_votes, 0) + 1 WHERE name = '${gscb}';`,
            `UPDATE candidate SET number_of_votes = COALESCE(number_of_votes, 0) + 1 WHERE name = '${gssb}';`,
            `UPDATE candidate SET number_of_votes = COALESCE(number_of_votes, 0) + 1 WHERE name = '${gswb}';`
        ];
        for (let i = 0; i < queries.length; i++) {
            await executeQuery(queries[i]);
        }
        res.status(200).json({ success: true, message: "voting successful." });
    } catch (error) {
        console.error("Error incrementing votes:", error);
        res.status(400).json({ success: false, message: "Failed to register candidate. Please check if the student is eligible." });
    }
};

module.exports = {
    getVotting,
    postVotting
};