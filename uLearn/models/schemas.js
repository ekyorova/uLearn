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
		type : Number
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
		type : Number,
		required : true
	}
});

module.exports = mongoose.model('Teacher', teacherSchema);

mongoose.connect('mongodb://localhost:27017/ulearn', function(err, result) {
	if (err) {
		console.log('There was an error connecting to ulearn database: ' + err);
	} else {
		console.log('Successfully connected to ulearn database.');
	}
});