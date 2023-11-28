const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")


const app = express()
const port = process.env.PORT  || 3000

app.listen(port,() => {
    console.log(`A port a ${port}-on fut.`)
})

app.use((req, res, next) => {
    if(req.method) {
        res.status(503).send("A szolgáltatás karbantartás alatt van, ideiglenesen nem elérhető")
    } else {
        next()
    }
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
