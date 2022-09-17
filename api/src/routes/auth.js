const router = require("express").Router();
const passport = require("passport");
//http://localhost:3001/auth/google/callback
const CLIENT_URL = "http://localhost:3000/";
const CLIENT_URL_LOGOUT = "http://localhost:3000/login";

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

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,		
		failureRedirect: "/login/failed",
	})		
);
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
	"/github/callback",
	passport.authenticate("github", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);


module.exports = router;
