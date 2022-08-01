import { Router } from "express";
import * as controllers from "../controllers/exports.js"
import { isAdmin } from "../helpers/admin.js";
import isLogged from "../helpers/logged.js";

const router = Router({mergeParams: true});

// GET
router.get('/', isLogged, controllers.HomeController);
router.get('/auth/login', controllers.AuthController.login.GET)
router.get('/auth/cadastrar', controllers.AuthController.cadastro.GET)

router.get('/events', isAdmin, controllers.EventsController.index)
router.get('/events/adicionar', isAdmin, controllers.EventsController.adicionar.GET)
// POST
router.post('/auth/login', controllers.AuthController.login.POST)
router.post('/auth/cadastrar', controllers.AuthController.cadastro.POST)
router.post('/events/participar', controllers.EventsController.participar)
router.post('/events/adicionar', isAdmin, controllers.EventsController.adicionar.POST)
// PUT

// DELETE

// UPDATE


export { router };