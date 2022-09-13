const { Users } = require("./src/models/Users");
const { Op } = require("sequelize");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const GOOGLE_CLIENT_ID = "945644650061-0ts08c3vksmljvnnivlbjjko15mgqp0f.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "3e73f61eba155354d3b9";
const GITHUB_CLIENT_SECRET = "2d1e660993492dd4c54200a794325f70148d5782";
const FACEBOOK_CLIENT_ID = "ee7de60d067619fbde4c638894504de1";
const FACEBOOK_CLIENT_SECRET = "f6867dbebc5db0f44650257033b08265";
const bcrypt = require("bcrypt");
//ee7de60d067619fbde4c638894504de1 Facebook ClientID
//f6867dbebc5db0f44650257033b08265 Facebook Secret
//3e73f61eba155354d3b9 Github clientID
//2d1e660993492dd4c54200a794325f70148d5782 Github Secret
// 163222537933-j1v1rfj305i93ctbpse2hqvla08r1a64.apps.googleusercontent.com richardd82.abd
// 945644650061-0ts08c3vksmljvnnivlbjjko15mgqp0f.apps.googleusercontent.com richardd82
//SECRET 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

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile)
		}
	)
);
passport.use(
	new GithubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: "/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile)
		}
	)
);
passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET,
			callbackURL: "/auth/facebook/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile)
		}
	)
);

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((user, done) => {
    done(null, user);
})
