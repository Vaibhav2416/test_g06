const express=require("express")
const {connection} = require("./config/db")
const {routes}=require("./Routes/student.routes")
// connection will make linking to mongodb
const app=express()
app.use(express.json()) // we are sending json data from client
// routes wala part
app.use("/",routes)
// "/" => http://localhost:8000/students
app.listen(8000,async()=>{
    try {
        await connection
        console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
})