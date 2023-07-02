const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')
const Connection = require('../database/Connection')
const RetrieveService2 = require('../services/Getalltodos')
const SearchById = require('../services/SearchById')
const setCompleted = require('../services/SetCompleted')

router.post(`/create`, async(req, res) => {
    const {id, todolist} = req.body
console.log(req.body)
    const results = await CreateService(id, todolist)

    if (results) {
        res
        .status(201)
        .send({
            status: results,
            message: "Successfully Created!"
        })
    } else {
        res
            .status(501)
            .send ({
                status: results,
                message: "Not Created!"
            })
    }
})

router.get(`/getbyId`, async(req, res) => {
    const { fields } = req.query

    const results = await RetrieveService(fields)

    if (results) {
        res 
        .status(200)
        .send (results)
            

    } else {
        res
            .status(500)
            .send ({
                status: results,
                message: "Not Retrieved!"
            })
    }
})

router.put(`/update`, async(req, res) => {
    const {number, newTodolist} = req.body

    const results = await UpdateService(number, newTodolist)

    if (results) {
        res     
        .status(200)
        .send({
            status: results,
            message: "Successfully Updated!"
        })
    } else {
        res
            .status(500)
            .send ({
                status: results,
                message: "Not Updated!"
            })
    }
})

router.get(`/SearchById`, async(req, res) => {
    const { id } = req.query

    const results = await SearchById(id)

    if (results) {
        res 
        .status(200)
        .send (results)
            

    } else {
        res
            .status(500)
            .send ({
                status: results,
                message: "Not Retrieved!"
            })
    }
})

router.get(`/FindByTitle`, async(req, res) => {
    const { search } = req.query

    const results = await RetrieveService(search)

    if (results) {
        res 
        .status(200)
        .send (results)
            

    } else {
        res
            .status(500)
            .send ({
                status: results,
                message: "Not Retrieved!"
            })
    }
})


router.get(`/GetAllTodos`, async(req, res) => {
     const {fields} = req.query

    const results = await RetrieveService2(fields)

    if (results) {
        res     
        .status(201)
        .send({
            status: results,
            message: "Successfully Getalltodos!"
        })
    } else {
        res
            .status(501)
            .send ({
                status: results,
                message: "Failed to Get!"
            })
    }
})

router.get(`/delete`, async(req, res) => {
    const {id} = req.query



    const results = await DeleteService(id)

    if (results) {
        res
        .status(200)
        .send({
            status: results,
            message: "Successfully Updated!"
        })
    } else {
        res
            .status(500)
            .send ({
                status: results,
                message: "Not Updated!"
            })
    }
})
module.exports = router

router.put(`/setCompleted`, async(req, res) => {
    const {id,isCompleted} = req.body
console.log(req.body)
    const results = await setCompleted(id,isCompleted)

    if (results) {
        res
        .status(201)
        .send({
            status: results,
            message: "Successfully Created!"
        })
    } else {
        res
            .status(501)
            .send ({
                status: results,
                message: "Not Created!"
            })
    }
})