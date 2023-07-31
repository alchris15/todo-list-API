const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')
const Connection = require('../database/Connection')
const RetrieveService2 = require('../services/Getalltodos')
const SearchById = require('../services/GetById')
const setCompleted = require('../services/SetCompleted')
const FindByTitle = require('../services/FindByTitle')
const setDeleted = require('../services/setDeleted')
const { idText } = require('typescript')
const GetById = require('../services/GetById')



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

router.get(`/GetById`, async(req, res) => {
    const { id } = req.query

    const results = await GetById(id)

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

    const results = await FindByTitle(search)

    if (results) {
        res 
        .status(201)
        .send (results)
            

    } else {
        res
            .status(501)
            .send ({
                status: results,
                message: "Not Searched!"
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
        .status(201)
        .send({
            status: results,
            message: "Successfully Updated!"
        })
    } else {
        res
            .status(501)
            .send ({
                status: results,
                message: "Not Updated!"
            })
    }
})
/*
When to use Query Param
1. When PUT endpoint has fixed functionality or purpose. like Set True or False

When to use Body
1. If you want to update morethan 1 fields or not true or false.
2. If new value is set from Consumer End.

*/

router.put(`/setCompleted`, async(req, res) => {
    const {id} = req.query
    const results = await setCompleted(id)

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


router.put(`/setDeleted`, async(req, res) => {
    const {id} = req.query
console.log(req.query)
    const results = await setDeleted(id)

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

module.exports = router