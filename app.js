const express = require("express");
const path = require("node:path");
const signUpRouter = require("./routes/signUpRouter")
const logInRouter = require("./routes/logInRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/sign-up", signUpRouter);
app.use("/log-in", logInRouter)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Your App is running on Port ${PORT} Successfully`);
});

