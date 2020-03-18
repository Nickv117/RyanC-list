const express = require("express")
const craigRoutes = require("./routes/craigData")
const postRoutes = require("./routes/postsData")
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", craigRoutes)
app.use("/api", postRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
