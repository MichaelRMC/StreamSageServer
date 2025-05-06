const db = require( "../db/dbConfig.js" );

const getAllTitles = async () => {
	try {
		const allTitles = await db.any("SELECT * FROM title_id");
		return allTitles;
	} catch (error) {
		return error;
	}
};

const getOneTitle = async (id) => {
	try {
		const oneTitle = await db.one(
			"SELECT * FROM title_id WHERE id=$1",
			id
		);
		return oneTitle;
	} catch (error) {
		return error;
	}
};




module.exports = {
	getAllTitles,
	getOneTitle
};