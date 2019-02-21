const router = require('express').Router();
const { Clothing } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
	try {
		const clothing = await Clothing.findAll();
		res.json(clothing);
	} catch (err) {
		next(err);
	}
});

router.get('/pants', async (req, res, next) => {
	try {
		const users = await Clothing.findOne({
			where: {
				type: 'pants'
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/coat', async (req, res, next) => {
	try {
		const users = await Clothing.findOne({
			where: {
				type: 'coat'
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/shoes', async (req, res, next) => {
	try {
		const users = await Clothing.findOne({
			where: {
				type: 'shoes'
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/shirt', async (req, res, next) => {
	try {
		const users = await Clothing.findOne({
			where: {
				type: 'shirt'
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/hat', async (req, res, next) => {
	try {
		const users = await Clothing.findOne({
			where: {
				type: 'hat'
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newClothing = await Clothing.create(req.body);
		res.status(200).send(newClothing);
	} catch (error) {
		next(error);
	}
});
