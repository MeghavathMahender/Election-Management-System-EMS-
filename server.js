const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config();
const app = express(); 
const PORT = process.env.PORT || 3000; 

// import routes here
const homepageRoute = require("./routes/homepageroute");
const ballotRoute = require("./routes/ballotroute");
const helpDeskRoute = require("./routes/helpdeskroute");
const resultsRoute = require("./routes/resultsroute");
const registrationRoute = require("./routes/registrationroute");
const cancelNominationRoute = require("./routes/cancelnominationroute");
const candidateRegistrationRoute = require("./routes/candidateregistrationroute");
const voter1Route = require("./routes/voter1route");
const uploadManifestoRoute = require("./routes/uploadmanifestoroute");
const loginRoute = require("./routes/loginroute");
const vottingRoute = require("./routes/vottingroute");
const see_manifestoRoute = require("./routes/see_manifestoroute");
const voter_registrationsuccesRoute = require("./routes/voter_registrationsuccesroute");
const can_regsfulRoute = require("./routes/can_regsfulroute");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
// app.use(bodyParser.json());

// Serve static files (CSS, images, 


app.use("/",homepageRoute);
app.use("/ballot",ballotRoute);
app.use("/results",resultsRoute);
app.use("/registration",registrationRoute);
app.use("/helpdesk",helpDeskRoute);
app.use("/registration/voter1",voter1Route);
app.use("/registration/candidate_registration",candidateRegistrationRoute);
app.use("/registration/upload_manifesto",uploadManifestoRoute);
app.use("/registration/cancellation_nomination",cancelNominationRoute);
app.use("/ballot/login",loginRoute);
app.use("/ballot/votting",vottingRoute);
app.use("/ballot/see_manifesto",see_manifestoRoute);
app.use("/registration/voter_registration/voter_registrationsucces",voter_registrationsuccesRoute);
app.use("/registration/canndiate_registration/can_regsful",can_regsfulRoute);







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

// 404 Error Block
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});
