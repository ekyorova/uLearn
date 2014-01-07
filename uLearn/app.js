var restify = require('restify');
var teacherRouter = require('./routes/teacher');
var studentRouter = require('./routes/student');
var phdRouter = require('./routes/phd');
var mongoose = require('mongoose');
var db = require('./models/schemas');
var server = restify.createServer({
  name: 'uLearn'
  });

/**
 * Common Handlers
 */
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.jsonp());

server.listen(3000, function() {
	console.log('Restify server listening on port 3000.');
});

server.post("/teacher", teacherRouter.addTeacher);
server.del("/teacher", teacherRouter.deleteTeacher);
server.put("/teacher", teacherRouter.updateTeacher);
server.post("/student", studentRouter.addStudent);
server.del("/student", studentRouter.deleteStudent);
server.put("/student", studentRouter.updateStudent);
server.post("/phd", phdRouter.addPhd);
server.del("/phd", phdRouter.deletePhd);
server.put("/phd", phdRouter.updatePhd);
