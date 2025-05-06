const db = require("../db/dbConfig.js");

const getTitleByName = async (title) => {
	try {
		const titleByName = await db.one(
			"SELECT * FROM title_id WHERE title=$1",
			title
		);
		return titleByName;
	} catch (error) {
		return error;
	}
};

module.exports = getTitleByName;