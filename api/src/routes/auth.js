const router = require("express").Router();
const passport = require("passport");
//http://localhost:3001/auth/google/callback
const CLIENT_URL = "https://localhost:3000/";
const CLIENT_URL_LOGOUT = "https://localhost:3000/login";

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "succefull",
			user: req.user,
			// coolies: req.cookies
		});
	}
});
router.get("/login/failed", (req, res) => {
	res.status(401).json({
		success: false,
		message: "failure",
	});
});

router.get("/logout", (req, res, next) => {
	req.logout()
	res.redirect(CLIENT_URL_LOGOUT);
	
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
	"/github/callback",
	passport.authenticate("github", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
router.post("/local", async (req,res,next) => {
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
});

module.exports = router;
