const express = require("express");
const mongoose = require("mongoose")
const StudentConrtoller = require("./app/controllers/StudentController");
const TeacherController = require("./app/controllers/TeacherController");

const app = express()
const port = 2021
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/studentDB")
app.get("/",(req,res) => {
    res.send("Welcome to HelixCure🙏")
});

app.get("/about",(req,res) =>{
    res.send("About Doctors.")
})

app.post("/student",StudentConrtoller.create),
app.get("/student",StudentConrtoller.readAll),
app.get("/student/:id",StudentConrtoller.readOne),
app.put("/student/:id",StudentConrtoller.update),
app.delete("/student/:id",StudentConrtoller.destroy),


app.post("/student",TeacherController.create),
app.get("/student",TeacherController.readAll),
app.get("/student/:id",TeacherController.readOne),
app.put("/student/:id",TeacherController.update),
app.delete("/student/:id",TeacherController.destroy),



app.listen(port,() => {
        console.log(`server:http://localhost:${port}`)
})
