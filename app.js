const express = require("express")
const bodyParser = require("body-parser")



const app = express()

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  let today = new Date()
  let currentDay = today.getDay()
  let day = ""


  if (currentDay == 0 ) {
    day = "Sunday"
    res.render("list", {kindOfDay: day })
  } else if (currentDay == 1) {
    day = "Monday"
    res.render("list", {kindOfDay: day })
  } else if (currentDay == 2) {
    day = "Tuesday"
    res.render("list", {kindOfDay: day })
  } else if (currentDay == 3) {
    day = "Wednesday"
    res.render("list", {kindOfDay: day })
  } else if (currentDay == 4) {
    day = "Thursday"
    res.render("list", {kindOfDay: day })
  } else if (currentDay == 5) {
    day = "Friday"
    res.render("list", {kindOfDay: day })
  } else if (currentDay == 6) {
    day = "Saturday"
    res.render("list", {kindOfDay: day })
  }})


app.listen(3000, function(){
  console.log("Server started on port 3000")
})