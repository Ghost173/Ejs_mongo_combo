const express = require('express');
const route = express.Router()
const services = require('../services/render')

route.get('/',services.HomeRoute)

route.get('/add-user',services.add_user)

route.get('/update-user',services.updaye_user)


module.exports = route