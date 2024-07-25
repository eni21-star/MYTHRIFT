const generateDescription = require("../Controllers/generateDescriptionCont")
const express = require("express")
const router  = express.Router()


router.post('/', generateDescription);



module.exports = router