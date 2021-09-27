const express = require(`express`);
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { UserRouter } = require(`./routes`);

app.get("/", (req, res) => {
    res.send("Welcome to the best API ever! It's very good for useless methods!")
});
app.use("/users", UserRouter);

app.listen(3000, () => console.log(`Server Started`));
