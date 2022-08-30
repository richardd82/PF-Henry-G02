const { Router } = require('express');
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

module.exports = router;
