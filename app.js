require('dotenv').config();
require('./config/passport');
const express = require("express");
const path = require("node:path");
const pool = require("./db/pool");
const passport = require("passport");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const indexRouter = require("./routes/indexRouter");
const signUpRouter = require("./routes/signUpRouter");
const logInRouter = require("./routes/logInRouter");
const messageRouter = require("./routes/messageRouter");
const becomeMemberRouter = require("./routes/becomeMemberRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({ 
        secret: process.env.SECRET, 
        resave: false, 
        saveUninitialized: false,
        store: new pgSession({
            pool,                       
            tableName: "session",  
            createTableIfMissing: true,  
        }),
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000, 
        }
    })
);

app.use(passport.initialize()); 
app.use(passport.session());  

app.use("/", indexRouter);
app.use("/", signUpRouter);
app.use("/", logInRouter);
app.use("/", messageRouter);
app.use("/", becomeMemberRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your App is running on Port ${PORT} Successfully`);
});
