const express = require('express')

const routers = express.Router()

const path = require('path')



routers.use((req, res, next) => {
  
    res.render('404',{


    })
  });

module.exports = routers