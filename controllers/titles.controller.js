const express = require( "express" );
const titles = express.Router();
const {
	getAllTitles,
	getOneTitle,
	getTitleByName
} = require("../queries/titles");

const searchController = require( "../controllers/search.controller" );

titles.use("/search", searchController)

titles.get("/:id", async( req, res ) => {
	const { id } = req.params;
	const oneTitle = await getOneTitle( id );
	if ( oneTitle ) {
		res.json( oneTitle );
	} else {
		res.status(404).json({error: "Not Found!"})
	}
});

titles.get("/", async ( req, res ) =>
{
	const allTitles = await getAllTitles();
	if ( allTitles[ 0 ] )
	{
		res.status( 200 ).json( allTitles );
	} else
	{
		res.status( 500 ).json( {
			success: false,
			data: { error: "Server Error!" }
		} );
	}
} );

module.exports = titles