const db = require( "../db/dbConfig.js" );

const getOneService = async (id) => {
	try {
		const oneService = await db.one(
			"SELECT * FROM streaming_service WHERE id=$1",
			id
		);
		return oneService;
	} catch (error) {
		return error;
	}
};

const getAllTitles = async () => {
	try {
		const titles = await db.any("SELECT * FROM titles_id");
		return titles;
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
	getOneService,
	getAllTitles,
	getOneTitle,
}