require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	API_URL
} = process.env;

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL:"/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			console.log("entre a google", accessToken);
			done(null, profile);
		}
	)
);
passport.use(
	new GithubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			scope: ["user:email"],
			callbackURL:"/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			console.log("accessToken==" + accessToken);
			// User.findOrCreate({ githubId: profile.id }, function (err, user) {
				// cb(err, user);
			// }
			// ); 
			console.log(profile + 'PROFILE')
			return done(null, profile);
		}
	)
);
passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((user, done) => {
	done(null, user);
});
