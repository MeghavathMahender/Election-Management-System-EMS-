const { executeQuery } = require('../database/database');

const getResults = async (req,res) => {
    let query = "SELECT position, name, number_of_votes, CASE WHEN @prev_position = position THEN @rank := @rank + 1 ELSE @rank := 1 END AS position_rank, CASE WHEN @prev_position = position THEN 'Second' ELSE 'First' END AS position_rank_desc, @prev_position := position FROM ( SELECT position, name, number_of_votes FROM ( SELECT 'President' AS position, name, number_of_votes FROM candidate WHERE position = 'President' ORDER BY number_of_votes DESC LIMIT 2 ) AS president UNION ALL SELECT position, name, number_of_votes FROM ( SELECT 'Vice President' AS position, name, number_of_votes FROM candidate WHERE position = 'Vice President' ORDER BY number_of_votes DESC LIMIT 2 ) AS vice_president UNION ALL SELECT position, name, number_of_votes FROM ( SELECT 'General Secretary - Technical Board' AS position, name, number_of_votes FROM candidate WHERE position = 'General Secretary - Technical Board' ORDER BY number_of_votes DESC LIMIT 2 ) AS gs_technical_board UNION ALL SELECT position, name, number_of_votes FROM ( SELECT 'General Secretary - Sports Board' AS position, name, number_of_votes FROM candidate WHERE position = 'General Secretary - Sports Board' ORDER BY number_of_votes DESC LIMIT 2 ) AS gs_sports_board UNION ALL SELECT position, name, number_of_votes FROM ( SELECT 'General Secretary - Welfare Board' AS position, name, number_of_votes FROM candidate WHERE position = 'General Secretary - Welfare Board' ORDER BY number_of_votes DESC LIMIT 2 ) AS gs_welfare_board UNION ALL SELECT position, name, number_of_votes FROM ( SELECT 'General Secretary - Cultural Board' AS position, name, number_of_votes FROM candidate WHERE position = 'General Secretary - Cultural Board' ORDER BY number_of_votes DESC LIMIT 2 ) AS gs_cultural_board ) AS all_positions JOIN (SELECT @rank := 0, @prev_position := '') AS vars ORDER BY position, position_rank;";
    candidate_data =await executeQuery(query);
    res.render("results", {candidate_data:candidate_data});
    console.log(candidate_data);
}

module.exports = {
    getResults
};