const { executeQuery } = require('../database/database');

const getHelpDesk = (req,res) => {
    res.render("helpdesk");
}

const postHelpDesk = async (req,res) => {
    console.log(req.body);
    let query = `insert into help_desk values('${req.body.review}' , '${req.body.complaints}' , '${req.body.name}');`;
    let query_execute = await executeQuery(query);
    res.status(200).json({ success: true, message: "submitted successfully." });
}

module.exports = {
    getHelpDesk,
    postHelpDesk
};