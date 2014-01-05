var mongoose = require('mongoose');
var crypto = require('crypto');


/* Student function */
exports.addNewStudent = function(data, callback) {
	var student = mongoose.model("Student");
	if (data.firstName === undefined) {
		callback("firstName-not-defined");
	} else if (data.secondName === undefined) {
		callback("secondName-not-defined");
	} else if (data.lastName === undefined) {
		callback("lastName-not-defined");
	} else if (data.email === undefined) {
		callback("email-not-defined");
	} else if (data.facNumber === undefined) {
		callback("facNumber-not-defined");
	} else if (data.subjectOfStudies === undefined) {
		callback("subjectOfStudies-not-defined");
	} else if (data.formOfEducation === undefined) {
		callback("formOfEducation-not-defined");
	} else if (data.startYear === undefined) {
		callback("startYear-not-defined");
	}
	
	student.findOne({
		$and : [ {
			_id : data._id
		}, {
			email : data.email
		} ]
	}, function(error, object) {
		if (object) {
			if (object.email == data.email) {
				callback('email-exists');
			}
		} else {
			if (!data.title) {
				data.title = "";
			}
			if (!data.address) {
				data.address = "";
			}
			var newStudent = new student({
				'_id' : data._id,
				'firstName' : data.firstName,
				'secondName' : data.secondName,
				'lastName' : data.lastName,
				'phone' : data.phone,
				'email' : data.email,
				'address' : data.address,
				'practiceProposal': data.practiceProposal,
				'practiceRating': data.practiceRatings,
				'facNumber': data.facNumber,
				'subjectOfStudies': data.subjectOfStudies,
				'masterProgram' : data.masterProgram,
				'formOfEducation': data.formOfEducation,
				'startYear': data.startYear,
				'review' : data.review,
				'application' : data.application,
				'thesisProposal': data.thesisProposal,
				'graduationWork': data.graduationWork,
				'reportAssignment': data.reportAssignment
			});
			newStudent.save(function(error) {
				if(error) {
					console.log(error);
					callback(error);
				} else {
					callback(null);
				}
			});
		}
	});
};

exports.getAllStudents = function(callback) {
	var student = mongoose.model('Student');
	student.findOne(function(error, result) {
		if (error) {
			callback(error);
		} else {
			callback(null, result);
		}
	});
};

exports.deleteStudentById = function(id, callback) {
	var student= mongoose.model('Student');
	student.remove({_id : id}, function(error, result) {
		if (error) {
			callback(error);
		} else {
			callback(null);
		}
	});
};

exports.updateStudentData= function(id, data, callback){
	var student = mongoose.model('Student');
	if (data.firstName === undefined) {
		callback("firstName-not-defined");
	} else if (data.secondName === undefined) {
		callback("secondName-not-defined");
	} else if (data.lastName === undefined) {
		callback("lastName-not-defined");
	} else if (data.email === undefined) {
		callback("email-not-defined");
	} else if (data.facNumber === undefined) {
		callback("facNumber-not-defined");
	} else if (data.subjectOfStudies === undefined) {
		callback("subjectOfStudies-not-defined");
	} else if (data.formOfEducation === undefined) {
		callback("formOfEducation-not-defined");
	} else if (data.startYear === undefined) {
		callback("startYear-not-defined");
	}
	student.update({_id:id}, 
			{ $set: {
				'firstName' : data.firstName,
				'secondName' : data.secondName,
				'lastName' : data.lastName,
				'phone' : data.phone,
				'email' : data.email,
				'address' : data.address,
				'practiceProposal': data.practiceProposal,
				'practiceRating': data.practiceRatings,
				'facNumber': data.facNumber,
				'subjectOfStudies': data.subjectOfStudies,
				'masterProgram' : data.masterProgram,
				'formOfEducation': data.formOfEducation,
				'startYear': data.startYear,
				'review' : data.review,
				'application' : data.application,
				'thesisProposal': data.thesisProposal,
				'graduationWork': data.graduationWork,
				'reportAssignment': data.reportAssignment
			}
			},
			function(error, result) {
				if (error) {
					console.log(error);
					callback(error);
				} else {
					callback(null);
				}
	})
};