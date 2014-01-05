var user = require('../models/user');
var phd = require('../models/phd');

exports.addPhd = function(req, res) {
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
					var dataForPhd = {
							_id: object._id,
							firstName: req.body.firstName,
							secondName: req.body.secondName,
							lastName: req.body.lastName,
							phone: req.body.phone,
							email: req.body.email,
							address : req.body.address,
							report : req.body.report,
							department: req.body.department,
							startDate: req.body.startDate,
							program : req.body.program,
							formOfEducation : req.body.formOfEducation,
							code : req.body.code,
							teachers : null,
							status : req.body.status,
							educationPlan : null,
							workPlan : null,
							generalPlan : null,
							attestations : null,
							individualPlan : null
					};
					phd.addNewPhd(dataForPhd, function(error) {
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

exports.deletePhd = function(req, res) {
	var usernameToDelete = req.body.username;
	user.findByUsername({username : usernameToDelete}, function(error, object) {
		if (error) {
			res.send(400, error);
		} else {
			phd.deletePhdById(object._id, function(error,result) {
				if (error) {
					res.send(400, error);
				} else {
					user.deleteUserByUsername(object.username, function(error, result) {
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

exports.updatePhd = function(req, res) {
	var usernameToUpdate = req.body.username;
	var dataForPhd = {
			firstName: req.body.firstName,
			secondName: req.body.secondName,
			lastName: req.body.lastName,
			phone: req.body.phone,
			email: req.body.email,
			address : req.body.address,
			report : req.body.report,
			department: req.body.department,
			startDate: req.body.startDate,
			program : req.body.program,
			formOfEducation : req.body.formOfEducation,
			code : req.body.code,
			teachers : null,
			status : req.body.status,
			educationPlan : null,
			workPlan : null,
			generalPlan : null,
			attestations : null,
			individualPlan : null
	};
	user.findByUsername(usernameToUpdate, function(findError, object) {
		if (findError) {
			res.send(404, findError);
		} else {
			phd.updatePhdData(object._id, dataForPhd, function(error, result){
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
						res.send(200, 'ok');
					}
				});
				}
		});
		}
	});
};