const express = require( "express" );
const {
	getOneService,
	getAllTitles,
	getOneTitle,
} = require( "../queries/streamsage.js" );

const streamsage = express.Router();

service.get("/:id", async (req, res) => {
	const { id } = req.params;
	const oneService = await getOneService(id);
	if (oneService) {
		res.json(oneService);
	} else {
		res.status(404).json({ error: "Not Found!" });
	}
});

title.get( "/:id", async( req, res ) => {
	const { id } = req.params;
	const oneTitle = await getOneTitle( id );
	if ( oneTitle ) {
		res.json( oneTitle );
	} else {
		res.status(404).json({error: "Not Found!"})
	}
});

title.get( "/", async ( req, res ) =>
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
