const express = require('express');
const app = express();
const loginroutes = express.Router();

let Loginuser = require('../models/Loginuser');

loginroutes.route('/add').post((req, res) => {
	let loginuser = new Loginuser(req.body);
	loginuser
		.save()
		.then((login) => {
			res.status(200).json({ loginuser: 'User Registered Successfully' });
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});

loginroutes.route('/').get((req, res) => {
	Loginuser.find((err, users) => {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
});

loginroutes.route('/validate').post((req, res, next) => {
	const username = req.body.user_name;
	const password = req.body.password;
	Loginuser.findOne({ user_name: username, password: password }).then((data) => {
		if (data) {
			console.log(username);
			res.send(data);
		} else {
			let error = new Error('Could not find in database');
			error.status = 500;
			next(error);
		}
	});
});

loginroutes.route('/users/edit/:id').get((req, res) => {
	let _id = req.params.id;
	Loginuser.findById(_id, function(err, loginuser) {
		res.json(loginuser);
	});
});

loginroutes.route('/users/update/:id').post((req, res) => {
	Loginuser.findById(req.params.id, function(err, loginuser) {
		if (!loginuser) return next(new Error('could not load document'));
		else {
			loginuser.first_name = req.body.first_name;
			loginuser.last_name = req.body.last_name;
			loginuser.user_name = req.body.user_name;
			loginuser.password = req.body.password;
			loginuser.roles = req.body.roles;

			loginuser
				.save()
				.then((login) => {
					res.json('Update Complete');
				})
				.catch((err) => {
					res.status(400).send('unable to update the database');
				});
		}
	});
});

loginroutes.route('/delete/:id').get((req, res) => {
	Loginuser.findByIdAndRemove({ _id: req.params.id }, function(err, login) {
		if (err) res.json(err);
		else res.json('Successfully Removed');
	});
});

module.exports = loginroutes;
