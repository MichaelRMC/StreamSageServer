const db = require("../db/dbConfig.js");

const getAllServices = async () => {
	try {
		const services = await db.any("SELECT * FROM streaming_service");
		return services;
	} catch (error) {
		return error;
	}
};

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


module.exports = {
	getAllServices,
	getOneService
};