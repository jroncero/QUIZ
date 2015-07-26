
var models = require('../models/models.js');

// GET /quizes/:id

exports.show = function(req, res) {
   models.Quiz.find(req.params.quizId).success(function(quiz){
   res.render('quizes/show', { quiz: quiz});
});
};

// GET /author
exports.author = function(req, res) {
   res.render('author');
};

// GET /quizes

exports.index = function(req, res) {
   models.Quiz.findAll().success(function(quizes){
   res.render('quizes/index.ejs', { quizes: quizes});
});
};




// GET /quizes/:id/answer

exports.answer = function(req, res) {
models.Quiz.find(req.params.quizId).success(function(quiz){
	if (req.query.respuesta === quiz.respuesta){
		res.render('quizes/answer', { quiz: quiz, respuesta: 'Correcto'});
        } else {
		res.render('quizes/answer', {quiz: quiz, respuesta: 'Incorrecto'});
        }
})
};
