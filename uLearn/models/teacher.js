var mongoose = require('mongoose');
var crypto = require('crypto');


/* Teacher function */
exports.addNewTeacher = function(data, callback) {
	var user = mongoose.model("Teacher");
	if (data.firstName === undefined) {
		callback("firstName-not-defined");
	} else if (data.secondName === undefined) {
		callback("secondName-not-defined");
	} else if (data.lastName === undefined) {
		callback("lastName-not-defined");
	} else if (data.phone === undefined) {
		callback("phone-not-defined");
	} else if (data.email === undefined) {
		callback("email-not-defined");
	} else if (data.department === undefined) {
		callback("department-not-defined");
	} else if (data.hireDate === undefined) {
		callback("hireDate-not-defined");
	}
	user.findOne({
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
			var newTeacher = new user({
				'_id' : data._id,
				'firstName' : data.firstName,
				'secondName' : data.secondName,
				'lastName' : data.lastName,
				'phone' : data.phone,
				'email' : data.email,
				'department' : data.department,
				'address' : data.address,
				'hireDate' : data.hireDate,
				'title' : data.title
			});
			newTeacher.save(function(error) {
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

exports.updateAccount = function(id, data, callback) {
	var user = mongoose.model("Teacher");
	if (data.firstName === undefined) {
		callback("firstName-not-defined");
	} else if (data.secondName === undefined) {
		callback("secondName-not-defined");
	} else if (data.lastName === undefined) {
		callback("lastName-not-defined");
	} else if (data.phone === undefined) {
		callback("phone-not-defined");
	} else if (data.email === undefined) {
		callback("email-not-defined");
	} else if (data.department === undefined) {
		callback("department-not-defined");
	} else if (data.hireDate === undefined) {
		callback("hireDate-not-defined");
	}
	user.findOne({
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
		}
	});
};

exports.getAllUsers = function(callback) {
	var user = mongoose.model('Teacher');
	user.findOne(function(error, result) {
		if (error) {
			callback(error);
		} else {
			callback(null, result);
		}
	});
};

exports.deleteTeacherById = function(id, callback) {
	var teacher = mongoose.model('Teacher');
	teacher.remove({_id : id}, function(error, result) {
		if (error) {
			callback(error);
		} else {
			callback(null);
		}
	});
};