const Sequelize = require('sequelize');
const db = require('../db');

const Clothing = db.define('clothing', {
	type: {
		type: Sequelize.STRING
	},
	warmth: {
		type: Sequelize.STRING
	},
	occasion: {
		type: Sequelize.STRING
	},
	imgUrl: {
		type: Sequelize.STRING
	}
});

module.exports = Clothing;

// go back and make user table so they can store it
// add in the enums options to limit what post can be
