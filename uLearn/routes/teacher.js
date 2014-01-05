var user = require('../models/user');
var teacher = require('../models/teacher');

exports.addTeacher = function(req, res) {
	var dataForUser = {
		username: req.body.username,
		password: req.body.password,
		usertype: req.body.usertype,
		active: true,
		sessionId: null,
		lastActive: null
	};
	user.addNewUser(dataForUser, function(error) {
		if (error) {
			console.log(error);
			res.send(error, 400);
		} else {
			user.findByUsername(dataForUser.username, function(findError, object) {
				if (findError) {
					console.log(findError);
					res.send(findError, 404);
				} else {
					var dataForTeacher = {
							_id: object._id,
							firstName: req.body.firstName,
							secondName: req.body.secondName,
							lastName: req.body.lastName,
							phone: req.body.phone,
							email: req.body.email,
							department: req.body.department,
							hireDate: req.body.hireDate
					};
					console.log(dataForTeacher);
					teacher.addNewTeacher(dataForTeacher, function(error) {
						if (error) {
							console.log(error);
							res.send(400);
						} else {
							res.send(200);
						}
					});
				}
			});
		}
	});
}

exports.test = function(req, res) {
	var user = require("../models/user.js");
	user.test();
} 