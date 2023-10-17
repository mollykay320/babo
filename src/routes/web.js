const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const emailController = require('../controllers/emailController')

let initRoutes = (app) => {
  router.get('/', homeController.getHome)
  
  router.post('/send-email', emailController.sendMail)

  return app.use('/', router)
};

module.exports = initRoutes
