// Routes

const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

const AppRoutes = express.Router();

AppRoutes.get('/', AppController.getHomepage);
AppRoutes.get('/students', StudentsController.getAllStudents);
AppRoutes.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = AppRoutes;
