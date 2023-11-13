const http = require("http")

const url = 'http://api.weatherstack.com/current?access_key=7fac0c6ec4b1192e8fcc5868bd27c622&query=40,-75'


const request = http.request(url, (response) => {
    let data = ""

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log("Egy hiba", error)
})

request.end()