const express = require("express")
const craigData = require("./routes/craigData")
const postData = require("./routes/postData")
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", craigData)
app.use("/api", postData)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
