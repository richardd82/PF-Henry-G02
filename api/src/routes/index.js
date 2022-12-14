const { Router } = require('express');
const UsersRoute = require("./UsersRouter.js");
const ClassesRoute = require('./ClassesRoute.js');
const CohortsRoute = require ('./CohortsRoute.js');
const ModulesRoute = require ('./ModulesRoute.js');
const StandupsRoute = require("./StandupsRoute.js");
const FavoritesRoute = require("./FavoritesRoute.js");
const passport = require('passport');
const VideosRoute = require('./VideosRoute.js')
const AttendanceRoute = require('./AttendanceRoute.js')
const ReviewsRoute = require('./ReviewsRoute.js')
const Cloudinary = require("./Cloudinary.js")
const PaymentsRouter = require('./PaymentsRouter.js')
const PaymentRouter = require('./PaymentsRouter.js');

 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/checkout", PaymentsRouter);
router.use("/classes", ClassesRoute);
router.use("/cohorts", CohortsRoute);
router.use("/modules", ModulesRoute);
router.use("/standups", StandupsRoute);
router.use("/users", UsersRoute);
router.use("/favorites", FavoritesRoute);
router.use('/videos', VideosRoute)
router.use('/attendance', AttendanceRoute)
router.use('/reviews', ReviewsRoute)
router.use("/cloudinary", Cloudinary);
router.use('/checkout', PaymentRouter);


module.exports = router;
