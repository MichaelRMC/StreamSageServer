const express = require( "express" );
const cors = require( "cors" );
const titles = require("./controllers/titles.js")


const app = express();

app.use(cors());
app.use( express.json() );
app.use("/titles", titles)

app.get("/", (req, res) => {
	res.send("Welcome to StreamSage");
});

app.get("*", (req, res) => {
	res.status(404).send("Page Not Found!");
});

module.exports = app;
