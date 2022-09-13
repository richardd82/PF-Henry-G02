const { Users, Classes } = require("../db.js");
const { Op } = require("sequelize");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { SECRET_KEY, REWORK_MAIL } = process.env;
const session = require("express-session"); //middleware
const passport = require('passport');
// import transporter from "../utils/nodemailer/nodemailerConfig";
const SECRET_KEY = "qwertyuiopñlkjhgfdsa";

// inicializamos passport
// router.use(passport.initialize())

// el urlencoded es para que lo que viene por body lo recibamos como string o array
router.use(express.urlencoded({ extended: true }));

// usa express session para alojarla en la consola en application Session storage
router.use(
	session({
		secret: SECRET_KEY,
		resave: true,
		saveUninitialized: true,
	})
);

// autenticación: verifica si el usuario es correcto. Lo busca en la base de datos en passportConfig. Si lo encuentra, genera el token con la info que nos importa para autorizar,
// osea si es worker o no y si es admin o no.
passport.use(
    new LocalStrategy(
        {
            //recibe de los input los parámetros
            usernameField: "email", //"user_mail" es el input.name del form
            passwordField: "password", //lo que hace passport por atrás --> let user_mail = usernameField
        }, async (req, res, next) => {
	// const {user} = req.body;
	// console.log(user +  '>>>>>>>>>>>>> Soy User ')
	try {		
		passport.authenticate("local", { session: false }, async (error, user) => {			
			console.log(user + "USER DEL BACK");
			if (error) return res.status(400).json("invalid");
			else if (!user) return res.json("invalid");
			else if (user.active !== true) {
				return res
					.status(401)
					.send({
						message: "La cuenta se encuentra momentaneamente desactivada.",
					});
			} else {
				console.log("esto esta en log", user);
				return res.send(
					await jwt.sign(
						{
							id: user.id,
							email: user.email,
							active: user.active,
							category: user.category,
						},
						SECRET_KEY,
						{ expiresIn: "8h" }
					)
				);
			}
		});
	} catch (error) {console.log(error)}
}));

// router.post("/forgot-password", async (req, res) => {
//     const {user_mail, type} = req.body
//     console.log("email", user_mail)
//     try {
//         const worker = await UserWorker.findOne({ where: {user_mail: user_mail}})
//         const client = await UserClient.findOne({ where: {user_mail: user_mail}})
//         //si no existe en la db
//         if(!worker && !client){
//             res.send("Usuario inválido")
//         } else {
//             console.log("entre al post del forgot")
//             // si existe, le mandamos por mail un token que expira en 15 m que lo lleva a reset password para que pueda cambiar la contraseña
//             let user: any
//             if(worker){
//                 user = worker
//             } else{
//                 user = client
//             }
//             console.log("user del forgot", user)

//             //hacer un token, devolverlo al front, agarrarlo y decodificarlo,
//             const token = jwt.sign({
//                         user_mail: user.user_mail
//                     },
//                     SECRET_KEY,
//                     { expiresIn: "15m" }
//                 )

//                 const link = `https://re-work-ten.vercel.app/resetPassword?token=${token}`
//                 console.log("link forgot password", link)
//                 if(type === "passwordreset"){
//                 transporter.sendMail({
//                     from: `"REWork" <${REWORK_MAIL}>`,
//                     to: user.user_mail,
//                     subject: "Completa tu solicitud de restablecimiento de contraseña",
//                     html: `<!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">

//                         <style>
//                             p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Poppins', sans-serif !important;}
//                             h1{ font-size: 30px !important;}
//                             h2{ font-size: 25px !important;}
//                             h3{ font-size: 18px !important;}
//                             h4{ font-size: 16px !important;}
//                             p{font-size: 15px !important;}
//                             a{font-size: 30px !important;}

//                             .claseBoton{
//                                 width: 220px;
//                                 height: 60px
//                                     background-color: #F4A261;
//                                     border: 2px solid #F4A261;
//                                     border-radius: 5px;
//                                     color: #ffffff;
//                                     padding: 16px 32px;
//                                     text-align: center;
//                                     text-decoration: none;
//                                     display: inline-block;
//                                     font-size: 15px;
//                                     margin: 4px 2px;
//                                     transition-duration: 0.4s;
//                                     cursor: pointer;
//                             }  cursor: pointer;
//                             }
//                             .claseBoton:hover{
//                                 background-color: e76f51;
//                                 color: #ffffff;
//                             }
//                             .imag{
//                                 width: 20px;
//                                 height: 20px;
//                             }
//                             .contA{
//                                 margin: 0px 5px 0 5px;
//                             }
//                             .afooter{
//                                 color: #264653 !important;
//                                 text-decoration: none;
//                                 font-size: 13px !important;
//                             }
//                         </style>
//                     </head>
//                     <body>
//                         <div style="width: 100%; background-color: #e3e3e3;">
//                             <div style="padding: 20px 10px 20px 10px;">
//                                 <!-- Contenido principal -->
//                                 <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
//                                     <h1>¡Hola ${user.dataValues.name}!</h1>
//                                     <h2>Has solicitado cambiar tu contraseña.</h2>
//                                     <h3>Haz click en el siguiente botón e ingresa una nueva contraseña.</h3>

//                                     <!-- Botón -->
//                                     <a class="claseBoton" href="${link}">Restablecer contraseña</a>
//                                     <br>
//                                     <br>
//                                     <p>Si no has solicitado el cambio de tu contraseña, por favor comunícate con nosotros envíandonos un mensaje a ${REWORK_MAIL}.</p>
//                                 </div>

//                                 <!-- Footer -->
//                                 <div style="background-color: #ffffff; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
//                                     <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
//                                         © 2022 REwork, todos los derechos reservados.
//                                     </p>
//                                 </div>
//                                 <!-- Footer -->
//                             </div>
//                         </div>
//                     </body>
//                     </html>`
//                 })
//                 res.send("Correo enviado")
//             }
//         }
//     } catch (error){
//         res.send(error)
//     }
// })

// router.post("/reset-password", passport.authenticate("bearer", {session: false}),
//     async(req, res) => {
//     const { token, password } = req.body
//     console.log("token reset password", token)
//     console.log("password reset password", password)
//     try {
//         const email = jwt.verify(token, SECRET_KEY)
//         console.log("email reset", email.user_mail)

//         const worker = await UserWorker.findOne({where: {user_mail : email.user_mail}})
//         const client = await UserClient.findOne({where: {user_mail : email.user_mail}})
//         console.log("client", client)

//         let user
//         if(!worker && !client){
//             res.send("Usuario inválido")
//         } else {
//             if(worker){
//                 user = worker
//             } else {
//                 user = client
//             }

//             const newPassword = await bcrypt.hash(password, 8)
//             await user.set({password : newPassword}/* , {where: {user_mail : verifyToken.user_mail }} */);
//             await user.save()

//             res.send("Contraseña reestablecida")
//         }

//     }catch(error){
//         return error
//     }
// })

module.exports = {loginLocal}
