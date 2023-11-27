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