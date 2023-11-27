require("../src/db/mongoose")
const User = require("../src/models/user")


/* User.findByIdAndUpdate("6564b7431dbcd579388f9be7", {
    age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return {count, user}
}

updateAgeAndCount("6564b7431dbcd579388f9be7",2)
.then((userAndCount) => {
    console.log(userAndCount)
})