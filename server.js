var express = require("express")
var app = express()

const port = process.env.PORT || 8080
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

// index page
app.get("/", function (req, res) {
  res.render("pages/index")
})

// login page
app.get("/login", function (req, res) {
  res.render("pages/login")
})

// POST route to login
app.post("/api/auth", function (req, res) {
  const email = req.body.email
  const password = req.body.password

  if (email == "mrcsporto@gmail.com" && password == "1234")
    res.send({
      email: email,
      password: password,
    })
  else 
    res.status(404).send('Deu ruim')
})

app.listen(port)
console.log("Server started at http://localhost:" + port)
