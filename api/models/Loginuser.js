const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Loginuser = new Schema(
	{
		first_name: {
			type: String
		},
		last_name: {
			type: String
		},
		user_name: {
			type: String
		},
		password: {
			type: String
		},
		roles: {
			type: String
		}
	},
	{
		collection: 'loginusers'
	}
);

module.exports = mongoose.model('Loginuser', Loginuser);
