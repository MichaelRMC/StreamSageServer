const express = require("express");
const services = express.Router();
const { getAllServices, getOneService } = require("../queries/services");

services.get("/:id", async (req, res) => {
	const { id } = req.params;
	const oneService = await getOneService(id);
	if (oneService) {
		res.json(oneService);
	} else {
		res.status(404).json({ error: "Not Found!" });
	}
});

services.get("/", async (req, res) => {
	const allServices = await getAllServices();
	if (allServices[0]) {
		res.status(200).json(allServices);
	} else {
		res.status(500).json({
			success: false,
			data: { error: "Server Error!" },
		});
	}
});

module.exports = services;
