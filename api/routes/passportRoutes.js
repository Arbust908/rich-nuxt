const express = require('express')
const router = express.Router()
const passportController = require('../controllers/passportController')

// isValidID Middleware
// router.param('id', passportController.validateID)

router
  .route(`/`)
  // .get(passportController.getAll)
  .post(passportController.validateBody, passportController.post)

router
  .route(`/:id`)
  .get(passportController.getById)
  .patch(passportController.validateBody, passportController.patchById)
  .delete(passportController.validateBody, passportController.deleteById)

router.route(`/validate`).post(passportController.validateCredential)

module.exports = router
