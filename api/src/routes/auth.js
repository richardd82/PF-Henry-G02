const router = require("express").Router();
const passport = require("passport");
//http://localhost:3001/auth/google/callback
const CLIENT_URL = "https://localhost:3000/bootcamp/catalog";

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
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect(CLIENT_URL);
	});
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
router.get(
	"/facebook",
	passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
	"/facebook/callback",
	passport.authenticate("facebook", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

module.exports = router;
