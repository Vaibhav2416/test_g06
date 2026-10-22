const {Student}=require("../models/studentModel")

// Student Table with mongoose methods
//CRUD
// Creating Student in mongodb
// mongoose provide some methods to perform crud
// 1. create => this will store data in db

const createStudent=async(req,res)=>{
    try {
        const newUser=req.body // {name,email,age}
        const data=await Student.create(req.body)
        res.status(200).send({
            "message":"Student registered successfuly",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
// Student.find() ==> select * from students
const getStudents=async(req,res)=>{
    try {
        const data=await Student.find()
        res.status(200).send({
            "message":"Data Fetched Successfully",
            data
        }) 
    } catch (error) {
        console.log(error)
    }
}
// get single student
const getSingleStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Student.findById(id)
        res.send({
            "message":"Student fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
const deleteStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Student.findByIdAndDelete(id)
        res.send({
            "message":"Student deleted",
            data
        })
    } catch (error) {
        res.send(error)
    }
}

const updateStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Student.findByIdAndUpdate(id,req.body)
        res.send({
            "message":"User updated successfully"
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports={createStudent,getStudents,deleteStudent,getSingleStudent,updateStudent}