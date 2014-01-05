var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

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
		type : Number
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
			type : Number
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
			type : Number
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
			type : Number
		},
		programDueDate : {
			type : Number
		},
		programRating : {
			type : Number
		},
		languageDueDate : {
			type : Number
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
			type : Number
		},
		endDate : {
			type : Number
		},
		disertationTheme : {
			type : String
		},
		themeAcceptDate : {
			type : Number
		},
		themeReportId: {
			type:String
			},
		themeReportDate:{
			type:Number
		},
		acceptDate:{
			type:Number
		},
		reportId:{
			type:String
		},
		reportDate:{
			type:Number
		}
	}

});

module.exports = mongoose.model('Phd', phdSchema);