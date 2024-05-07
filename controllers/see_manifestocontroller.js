const { executeQuery } = require("../database/database");


const getsee_manifesto = async (req,res) => {
    let query = " select name,position,manifesto from candidate;";
    candidate_data =await executeQuery(query);
    res.render("see_manifesto", {candidate_data:candidate_data});
}


module.exports = {
    getsee_manifesto
};