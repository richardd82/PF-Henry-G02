const router = require("express").Router();
const passport = require("passport");
require('dotenv').config();
const {
	CLIENT_URL, CLIENT_URL_LOGOUT
  } = process.env;

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
router.get("/github", passport.authenticate("github", { scope: ["profile", "email"] }));

router.get(
	"/github/callback",
	passport.authenticate("github", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);


module.exports = router;
