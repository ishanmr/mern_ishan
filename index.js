const express = require("express");
const StudentConrtoller = require("./app/controllers/StudentController");

const app = express()
const port = 2020

app.get("/",(req,res) = > {
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



app.listen(port,() => {
        console.log(`server:http://localhost:${port}`)
})


