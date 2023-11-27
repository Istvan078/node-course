// console.log(id.toHexString())
// console.log(id.getTimestamp())

//  const objectId = mongodb.ObjectId

    //  db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Peter',
    //     age: 30
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: "Georgina",
    //         age: 35
    //     },
    //     {
    //         name: "Dzseni",
    //         age: 25
    //     }
    // ])

    // db.collection("tasks").insertMany([
    //     {
    //         description: "visszair ismerosoknek",
    //         completed: false
    //     },
    //     {
    //         description: "favagas",
    //         completed: true
    //     },
    //     {
    //         description: "alvas",
    //         completed: false
    //     }
    // ]).then((value) => {
    //     console.log(value)
    // }).catch((error) => {
    //     console.log(error)
    // })

        // const user = db.collection("users").findOne({ _id: new ObjectId("656280ca10001d6b1d17fce5") })
    // user.then((user) => {
    //     console.log(user)
    // })

    // db.collection("users").find({ name: "Istvan" }).toArray().then((users) => {
    //     console.log(users)
    // })

    // db.collection("users").find({ name: "Istvan" }).count().then((count) => {
    //     console.log(count)
    // })

    //     db.collection("users").updateOne({
//         _id: new ObjectId("6562708eba0f73a8cbd117a5")
//     }, {
//         $inc: {
//             age: 1
//         }
//     })
//     .then( (result)=> {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
// })
    // db.collection("tasks").updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection("users").deleteMany({
    //     age: 31
    // })
    //     .then((result) => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    //  CRUD - Create, read, update, delete
const connectionURL = 'mongodb://127.0.0.1:27017'


const {MongoClient, ObjectId} = require("mongodb")
const mongoClient = new MongoClient(connectionURL)

const databaseName = 'task-manager'

const id = new ObjectId()



async function main() {
    await mongoClient.connect();
    console.log('Sikeres csatlakozas az adatbazishoz')
    const db = mongoClient.db(databaseName);

    

    db.collection("tasks").deleteOne({
        _id: new ObjectId("65628344402f319ab2917dd2")
    }).then((result) => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
}

main()

const task = new Task({
    description: "ghjgh",
    completed: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

// const me = new User({
//     name: "Janos",
//     email: "janos@gmail.com",
//     password: "jelszooooo"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })