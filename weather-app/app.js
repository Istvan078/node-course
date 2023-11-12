const request = require("postman-request")

const url = 'http://api.weatherstack.com/current?access_key=7fac0c6ec4b1192e8fcc5868bd27c622&query=37.8267,-122.4233&units=m';

request({url: url, json: true}, (error, response) => {
   // console.log(response.body.current)
   console.log(response.body.current.weather_descriptions[0] + ". A jelenlegi hőmérséklet: " + response.body.current.temperature + " és " +response.body.current.feelslike +" foknak érződik.")
})