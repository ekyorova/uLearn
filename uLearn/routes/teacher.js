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
			res.send(400, error);
		} else {
			user.findByUsername(dataForUser.username, function(findError, object) {
				if (findError) {
					res.send(404, findError);
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
							res.send(400, error);
						} else {
							res.send(200, 'ok');
						}
					});
				}
			});
		}
	});
};

exports.deleteTeacher = function(req, res) {
	var usernameToDelete = req.body.username;
	user.findByUsername({username : usernameToDelete}, function(error, object) {
		if (error) {
			res.send(400, error);
		} else {
			teacher.deleteTeacherById(object._id, function(error,result) {
				if (error) {
					send(400, error);
				} else {
					user.deleteUserByUsername(object.username, function(error, result) {
						if (error) {
							res.send(400, error);
						} else {
							res.send(200, 'ok')
						}						
					});
					}
			});
		}
	});
};

exports.updateTeacher = function(req, res) {
			var usernameToUpdate = req.body.username;
			var dataForTeacher = {
					firstName: req.body.firstName,
					secondName: req.body.secondName,
					lastName: req.body.lastName,
					phone: req.body.phone,
					email: req.body.email,
					department: req.body.department,
					hireDate: req.body.hireDate
			};
			user.findByUsername(usernameToUpdate, function(findError, object) {
				if (findError) {
					res.send(404, findError);
				} else {
					teacher.updateTeacherData(object._id, dataForTeacher, function(error, result){
					if(error){
						res.send(400, error);
					} else {
						var dataForUser = {
								username: req.body.username,
								password: req.body.password,
								usertype: req.body.usertype,
								active: true,
								sessionId: null,
								lastActive: null
							};
						user.updateUser(dataForUser, function(error, result){
							if (error) {
								res.send(400, error);
							} else {
								res.send(200, 'ok')
							}						
						});
						}
				});
				}
			});
};
