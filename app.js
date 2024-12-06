const express = require("express");
const path = require("node:path");
const signUpRouter = require("./routes/signUpRoute")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", signUpRouter);



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Your App is running on Port ${PORT} Successfully`);
});

