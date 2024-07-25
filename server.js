const express = require("express");
const app = express();
const env = require("dotenv").config()
const cors = require('cors')
const generateDescription = require("./Routes/generateDescription")




app.use(express.json())
app.use(cors())


app.use("/api/v1/home", generateDescription)





app.listen(  process.env.PORT || 3000, 
    () => console.log(`server is runnnin on port ${process.env.PORT || 3000 }`)
)