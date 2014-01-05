var user = require('../models/user');
var student = require('../models/student');

exports.addStudent = function(req, res) {
	var dataForUser = {
		username : req.body.username,
		password : req.body.password,
		usertype : req.body.usertype,
		active : true,
		sessionId : null,
		lastActive : null
	};
	user.addNewUser(dataForUser, function(error) {
		if (error) {
			res.send(400, error);
		} else {
			user.findByUsername(dataForUser.username, function(findError,
					object) {
				if (findError) {
					res.send(404, findError);
				} else {
					var dataForStudent = {
						_id : object._id,
						firstName : req.body.firstName,
						secondName : req.body.secondName,
						lastName : req.body.lastName,
						phone : req.body.phone,
						email : req.body.email,
						address : req.body.address,
						facNumber : req.body.facNumber,
						subjectOfStudies : req.body.subjectOfStudies,
						formOfEducation : req.body.formOfEducation,
						startYear : req.body.startYear,
						practiceProposal :null,
						practiceRating: null,
						masterProgram : null,
						review : null,
						application : null,
						thesisProposal : null,
						graduationWork : null,
						reportAssignment : null
					};
					student.addNewStudent(dataForStudent, function(error) {
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

exports.deleteStudent = function(req, res) {
	var usernameToDelete = req.body.username;
	user.findByUsername({
		username : usernameToDelete
	}, function(error, object) {
		if (error) {
			res.send(400, error);
		} else {
			student.deleteStudentById(object._id, function(error, result) {
				if (error) {
					res.send(400, error);
				} else {
					user.deleteUserByUsername(object.username, function(error,
							result) {
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

exports.updateStudent = function(req, res) {
	var usernameToUpdate = req.body.username;
	var dataForStudent = {
			firstName : req.body.firstName,
			secondName : req.body.secondName,
			lastName : req.body.lastName,
			phone : req.body.phone,
			email : req.body.email,
			address : req.body.address,
			facNumber : req.body.facNumber,
			subjectOfStudies : req.body.subjectOfStudies,
			formOfEducation : req.body.formOfEducation,
			startYear : req.body.startYear,
			practiceProposal :null,
			practiceRating: null,
			masterProgram : null,
			review : null,
			application : null,
			thesisProposal : null,
			graduationWork : null,
			reportAssignment : null
	};
	user.findByUsername(usernameToUpdate, function(findError, object) {
		if (findError) {
			res.send(404, findError);
		} else {
			student.updateStudentData(object._id, dataForStudent, function(
					error, result) {
				if (error) {
					res.send(400, error);
				} else {
					var dataForUser = {
						username : req.body.username,
						password : req.body.password,
						usertype : req.body.usertype,
						active : true,
						sessionId : null,
						lastActive : null
					};
					user.updateUser(dataForUser, function(error, result) {
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
