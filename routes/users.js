const express = require(`express`);
const router = express.Router();
const users = [{ name: "Pyxel" }, { name: "Draco" }];

router.get("/", (req, res) => {
  let send = ""
  users.forEach(u => send += `<br>${u.name}`)
  res.send(`User List <br> ${send}`);``
  console.log(users)
});

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.post("/", (req, res) => {
  let isValid = true;
  if (isValid === true) {
    users.push({ name: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    res.redirect("/?err=1")
  }
});

router
  .route("/:id")

  .get((req, res) => {
    res.send(`Got user ${req.user.name}`);
  })

  .put((req, res) => {
    res.send(`Updated user ${req.user.name}`);
  })

  .delete((req, res) => {
    res.send(`Delete user ${req.user.name}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
