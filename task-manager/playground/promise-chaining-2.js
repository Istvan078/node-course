require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete("656485fa5ee5a15345b02d30").then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((incompTasksNumber) => {
    console.log(incompTasksNumber)
}).catch(err => {
    console.log(err)
})

const deleteTaskAndCount = async (id, completed ) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount("656485d25ee5a15345b02d2e", false)
.then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})