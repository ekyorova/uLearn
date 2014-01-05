var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var userSchema = new Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	usertype : {
		type : String,
		required : true
	},
	active : {
		type : Boolean,
		required : true
	},
	sessionId : {
		type : String
	},
	lastActive : {
		type : String
	}
});

module.exports = mongoose.model('User', userSchema);

var teacherSchema = new Schema({
	_id : {
		type : ObjectId,
		required : true,
		index : {
			unique : true
		}
	},
	firstName : {
		type : String,
		required : true
	},
	secondName : {
		type : String,
		required : true
	},
	lastName : {
		type : String,
		required : true
	},
	phone : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : true
	},
	address : {
		type : String
	},
	department : {
		type : String,
		required : true
	},
	title : {
		type : String
	},
	hireDate : {
		type : String,
		required : true
	}
});

module.exports = mongoose.model('Teacher', teacherSchema);

var phdSchema = new Schema({
	_id : {
		type : ObjectId,
		required : true,
		index : {
			unique : true
		}
	},
	firstName : {
		type : String,
		required : true
	},
	secondName : {
		type : String,
		required : true
	},
	lastName : {
		type : String,
		required : true
	},
	phone : {
		type : Number
	},
	email : {
		type : String,
		required : true
	},
	address : {
		type : String
	},
	report : {
		type : String
	},
	department : {
		type : String
	},
	startDate : {
		type : String
	},
	program : {
		type : String
	},
	formOfEducation : {
		type : String
	},
	code : {
		type : String,
		required : true
	},
	teachers : [ {
		type : mongoose.Schema.ObjectId,
		ref : "Teacher"
	} ],
	status : {
		type : String,
		required : true,
	},
	educationPlan : {
		filename : {
			type : String
		},
		report : {
			type : String
		},
		reportDate : {
			type : String
		},
		content : {
			type : String
		}
	},
	workPlan : {
		filename : {
			type : String
		},
		creationDate : {
			type : String
		},
		content : {
			type : String
		}
	},
	
	generalPlan : {
		filename : {
			type : String
		},
		content : {
			type : String
		}
	},

	attestations:{
		filename : {
			type : String
		},
		creationDate : {
			type : String
		},
		programDueDate : {
			type : String
		},
		programRating : {
			type : Number
		},
		languageDueDate : {
			type : String
		},
		languageRating : {
			type : Number
		},
		questions: {
			type:String
			},
		disertationWork:{
			type:String
		},
		result:{
			type:String
		},
		publication:{
			type: String
		},
		pedagogueWork:{
			type:String
		},
		directorOfStudiesOpinion:{
			type:String
		},
		reportNumber:{
			type:String
		},
		note:{
			type:String
		}
	},
	
	individualPlan:{
		filename : {
			type : String
		},
		orderId : {
			type : String
		},
		orderDate : {
			type : String
		},
		endDate : {
			type : String
		},
		disertationTheme : {
			type : String
		},
		themeAcceptDate : {
			type : String
		},
		themeReportId: {
			type:String
			},
		themeReportDate:{
			type:String
		},
		acceptDate:{
			type:String
		},
		reportId:{
			type:String
		},
		reportDate:{
			type:String
		}
	}

});

module.exports = mongoose.model('Phd', phdSchema);

var studentSchema = new Schema({
	_id : {
		type : ObjectId,
		required : true,
		index : {
			unique : true
		}
	},
	firstName : {
		type : String,
		required : true
	},
	secondName : {
		type : String,
		required : true
	},
	lastName : {
		type : String,
		required : true
	},
	phone : {
		type : Number
	},
	email : {
		type : String,
		required : true
	},
	address : {
		type : String
	},
	practiceProposal : {
		filename : {
			type : String
		},
		company : {
			type : String
		},
		companyInfo : {
			contacts : {
				type : String
			},
			email : {
				type : String
			},
			phone : {
				type : String
			}
		},
		practiceSubject : {
			type : String
		},
		practiceAnnotation : {
			type : String
		},

		practiceAim : {
			type : String
		},
		practiceTasks : {
			type : String
		},
		conditions : {
			type : String
		},
		duration : {
			type : String
		},
		workplace : {
			type : String
		},
		currentDate : {
			type : String
		},
		content : {
			type : String
		}
	},

	practiceRating : {
		fileName : {
			type : String
		},
		directorOfPractise : {
			type : String
		},
		levelOfCompletence : {
			type : String
		},
		results : {
			type : String
		},
		acquiredSkills : {
			type : String
		},
		finishedOnTime : {
			type : String
		},
		directorOfPractiseOpinion : {
			type : String
		},
		overallRating : {
			type : String
		},
		recommedations : {
			type : String
		},
		currentDate : {
			type : String
		}
	},

	facNumber : {
		type : String,
		required : true
	},

	subjectOfStudies : {
		type : String
	},

	masterProgram : [ {
		type : mongoose.Schema.ObjectId,
		ref : "Teacher"
	} ],
	formOfEducation : {
		type : String
	},
	startYear : {
		type : Number
	},
	workCompany : {
		type : String
	},
	review : {
		fileName : {
			type : String
		},
		criteria : {
			type : String
		},
		generalOpinion : {
			type : String
		},
		questions : {
			type : String
		},
		conclusions : {
			type : String
		},
		ratingWords : {
			type : String
		},
		creation : {
			type : Number
		}
	},

	application : {
		fileName : {
			type : String
		},
		status : {
			type : String
		}
	}

});

module.exports = mongoose.model('Student', studentSchema);

mongoose.connect('mongodb://localhost:27017/ulearn', function(err, result) {
	if (err) {
		console.log('There was an error connecting to ulearn database: ' + err);
	} else {
		console.log('Successfully connected to ulearn database.');
	}
});