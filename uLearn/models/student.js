var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

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
			type : Number
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
			type : Number
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