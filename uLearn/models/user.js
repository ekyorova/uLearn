var mongoose = require('mongoose');
var crypto = require('crypto');

/* User functions */

exports.autoLogin = function(username, password, callback) {
	var user = mongoose.model('User');
	user.findOne({
		username : username
	}, function(error, result) {
		if (result) {
			if (result.password === password) {
				callback(result);
			} else {
				callback(null);
			}
		} else {
			callback(null, error);
		}
	});
};

exports.manualLogin = function(username, password, callback) {
	var user = mongoose.model('User');
	user.findOne({
		username : username
	}, function(error, result) {
		if (result === null) {
			callback('user-not-found');
		} else {
			validatePassword(password, result.password, function(res) {
				if (res) {
					callback(null, result);
				} else {
					callback('invalid-password');
				}
			});
		}
	});
};
exports.test = function() {
	res.send('ok',200);
}
exports.addNewUser = function(data, callback) {
	var user = mongoose.model("User");
	if (data.username === undefined) {
		callback("username-not-defined");
	} else if (data.password === undefined) {
		callback("password-not-defined");
	} else if (data.usertype === undefined) {
		callback("usertype-not-defined");
	}
	user.findOne({
		$or : [ {
			'username' : data.username
		} ]
	}, function(error, object) {
		if (object) {
			if (object.username == data.username) {
				callback('username-exists');
			}
		} else {
			if (!data.blockedUsers) {
				data.blockedUsers = [];
			}
			saltAndHash(data.password, function(hash) {
				var newUser = new user({
					'username' : data.username,
					'password' : hash,
					'usertype' : data.usertype,
					'active' : data.active,
					'sessionId' : data.sessionId,
					'lastActive' : data.lastActive
				});
				newUser.save(function(error) {
					if (error) {
						console.log(error);
						callback(error);
					} else {
						callback(null);
					}
				});
			});
		}
	});
};

exports.findByUsername = function(searchUsername, callback) {
	var user = mongoose.model("User");
	user.findOne({username : searchUsername}, function(error, result) {
		if (error) {
			callback(error);
		} else {
			callback(null, result);
		}
	});
}

exports.updateAccount = function(id, data, callback) {
	var user = mongoose.model("User");
	if (data.username === undefined) {
		callback("username-not-defined");
	} else if (data.password === undefined) {
		callback("password-not-defined");
	} else if (data.usertype === undefined) {
		callback("usertype-not-defined");
	}
	user.findOne({
			username : data.username,
			_id : {
				$not : id}
	}, function(error, result) {
		if (result) {
			if (result.username == req.session.user.username) {
				callback("username-exists");
			}
		} else {
			saltAndHash(data.password, function(hash) {
				users.update({
					_id : id
				}, {
					'username' : data.username,
					'password' : hash,
				}, function(error, result) {
					if (error) {
						callback(error);
					} else {
						callback(null, result);
					}
				});
			});
		}
	});
};

exports.getAllUsers = function(callback) {
	var user = mongoose.model('User');
	user.find(function(error, result) {
		if (error) {
			callback(error);
		} else {
			callback(null, result);
		}
	});
};

/* Private encryption and validation methods */
var generateSalt = function() {
	var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
	var salt = '';
	for ( var i = 0; i < 10; i++) {
		var p = Math.floor(Math.random() * set.length);
		salt += set[p];
	}
	return salt;
};

var md5 = function(str) {
	return crypto.createHash('md5').update(str).digest('hex');
};

var saltAndHash = function(pass, callback) {
	var salt = generateSalt();
	callback(salt + md5(pass + salt));
};

var validatePassword = function(plainPassword, hashedPassword, callback) {
	var salt = hashedPassword.substr(0, 10);
	var validHash = salt + md5(plainPassword + salt);
	callback(hashedPassword === validHash);
};