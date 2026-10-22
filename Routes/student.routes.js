const {createStudent,getStudents,deleteStudent,getSingleStudent,updateStudent}=require("../controllers/studentController")

const express=require("express")
const routes=express.Router()
// you can write routes in different file with helo of express.Router
// we will link logic with routes here
routes.post("/students",createStudent)
routes.get("/students",getStudents)
routes.delete("/students/:id",deleteStudent)
routes.get("/students/:id",getSingleStudent)
routes.put("/students/:id",updateStudent)
http://localhost:8000/students/6ad8a7f89afe540f69ad874b
module.exports={routes}