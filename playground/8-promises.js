const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1])
        reject("Nem jol mentek a dolgok!")
    },2000)
})

doWorkPromise.then((result) => {
    console.log("Siker: ", result)
}).catch((error) => {
    console.log(error)
})

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1,2).then((sum) => {
    console.log(sum)

   return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})