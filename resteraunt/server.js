let express = require("express");
let path = require("path");

let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let waitList = [
    {
    customerName: "Kevin",
    phoneNumber: 125-345-6789,
    customerEmail: "kevin@gmail.com",
    customerId: "5"
    }
];
let resevationList = [];

 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList)
  });

  app.get("/api/reservationlist", function(req, res) {
    return res.json(resevationList)
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });