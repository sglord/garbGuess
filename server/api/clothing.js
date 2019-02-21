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

//clothing type
router.get('/:type', async (req, res, next) => {
	console.log(req.params.type);
	try {
		const users = await Clothing.findOne({
			where: {
				type: `${req.params.type}`
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});
//clothing type and warmth level
router.get('/:type/warmth/:level', async (req, res, next) => {
	console.log(req.params.level);
	try {
		const users = await Clothing.findOne({
			where: {
				type: `${req.params.type}`,
				warmth: `${req.params.level}`
			}
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/:type/warmth/:level/occasion/:dress', async (req, res, next) => {
	console.log(req.params.dress);
	try {
		const users = await Clothing.findOne({
			where: {
				type: `${req.params.type}`,
				warmth: `${req.params.level}`,
				occasion: `${req.params.dress}`
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
