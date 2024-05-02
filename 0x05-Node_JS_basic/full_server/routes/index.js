// Routes

import { Router } from 'express';
import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const AppRoutes = Router();

AppRoutes.get('/', AppController.getHomepage);
AppRoutes.get('/students', StudentsController.getAllStudents);
AppRoutes.get('/student/:major', StudentsController.getAllStudentsByMajor);

module.exports = AppRoutes;
