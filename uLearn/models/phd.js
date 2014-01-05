var mongoose = require('mongoose');
var crypto = require('crypto');

exports.addNewPhd = function(data, callback){
	var phd = mongoose.model("Phd");
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
	} else if (data.code === undefined) {
		callback("code-not-found");
	} else if (data.status === undefined) {
		callback("status-not-found");
	}
	phd.findOne({
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
			var newPhd = new phd({
				'_id' : data._id,
				'firstName' : data.firstName,
				'secondName' : data.secondName,
				'lastName' : data.lastName,
				'phone' : data.phone,
				'email' : data.email,
				'address' : data.address,
				'report' : data.report,
				'department' : data.department,
				'startDate' : data.hireDate,
				'program' : data.program,
				'formOfEducation' : data.formOfEducation,
				'code' : data.code,
				'teachers' : data.teachers,
				'status' : data.status,
				'educationPlan' : data.educationPlan,
				'workPlan' : data.workPlan,
				'generalPlan' : data.generalPlan,
				'attestations' : data.attestations,
				'individualPlan' : data.individualPlan
			});
			newPhd.save(function(error) {
				if(error) {
					console.log(error);
					callback(error);
				} else {
					callback(null);
				}
			});
		}
	});
	}
	
	exports.getAllPhds = function(callback) {
		var phd = mongoose.model('Phd');
		phd.findOne(function(error, result) {
			if (error) {
				callback(error);
			} else {
				callback(null, result);
			}
		});
	};

	exports.deletePhdById = function(id, callback) {
		var phd = mongoose.model('Phd');
		phd.remove({_id : id}, function(error, result) {
			if (error) {
				callback(error);
			} else {
				callback(null);
			}
		});
	};

	exports.updatePhdData= function(id, data, callback){
		var phd = mongoose.model('Phd');
		phd.update({_id:id},
				{ $set: {
					'firstName' : data.firstName,
					'secondName' : data.secondName,
					'lastName' : data.lastName,
					'phone' : data.phone,
					'email' : data.email,
					'address' : data.address,
					'report' : data.report,
					'department' : data.department,
					'startDate' : data.startDate,
					'program' : data.program,
					'formOfEducation' : data.formOfEducation,
					'code' : data.code,
					'teachers' : data.teachers,
					'status' : data.status,
					'educationPlan' : data.educationPlan,
					'workPlan' : data.workPlan,
					'generalPlan' : data.generalPlan,
					'attestations' : data.attestations,
					'individualPlan' : data.individualPlan
				}
				},
				function(error, result) {
					if (error) {
						console.log(error);
						callback(error);
					} else {
						callback(null);
					}
		});
 };
