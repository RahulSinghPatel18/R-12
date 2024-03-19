const express = require('express')
const router = express.Router();
const { models } = require('mongoose')
const {home,  createuser } = require('../controllers/usercontrollers');


router.get('/',home)

router.post("/create", createuser)


module.exports = router

