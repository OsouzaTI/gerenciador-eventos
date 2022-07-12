import { Router } from "express";
import * as controllers from "../controllers/exports.js"

const router = Router();

// GET
router.get('/', controllers.HomeController);
router.get('/user', controllers.UsersController.index);
router.get('/user/add', controllers.UsersController.add.GET);
router.get('/user/all', controllers.UsersController.all);
// POST
router.post('/user/add', controllers.UsersController.add.POST);
// PUT

// DELETE

// UPDATE


export { router };