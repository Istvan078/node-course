// setTimeout(() => {     //  A callback funkció az egy funkció amit átadunk paraméterként egy másik funkciónak, azzal a szándékkal hogy később meghívjuk. Itt a setTimeout függvény hívja meg a benne levő callback functiont 2 mp-belül és akkor lefut a callback függvény parancsa.
//     console.log("2 másodperc lejárt")
// }, 2000)

// const names = ["Andrew", "Istvan", "James"]

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data.latitude, data.longitude)
//     }, 2000)
// }

// geocode("Philadelphia", (lat, lon) => {
//     console.log(lat, lon)
// })

// //
// // Goal: Mess around with the callback pattern
// //
// // 1. Define an add function that accepts the correct arguments
// // 2. Use setTimeout to simulate a 2 second delay
// // 3. After 2 seconds are up, call the callback function with the sum
// // 4. Test your work!

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         const sum = a + b
//         callback(sum)
//     }, 2000)
// }

// add(4, 5, (sum) => {
//     console.log(sum) // Should print: 5
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback("Ez a hiba", undefined)
        callback(undefined, [1,4,7])
    },2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }
    console.log(result)
})