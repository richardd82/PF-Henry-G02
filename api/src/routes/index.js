const { Router } = require('express');
const UsersRoute = require("./UsersRouter.js");
const ClassesRoute = require('./ClassesRoute.js');
const CohortsRoute = require ('./CohortsRoute.js');
const ModulesRoute = require ('./ModulesRoute.js');
const StandupsRoute = require("./StandupsRoute.js");
const FavoritesRoute = require("./FavoritesRoute.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/classes", ClassesRoute);
router.use("/cohorts", CohortsRoute);
router.use("/modules", ModulesRoute);
router.use("/standups", StandupsRoute);
router.use("/users", UsersRoute);
router.use("/favorites", FavoritesRoute);


module.exports = router;
