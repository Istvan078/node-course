const path = require("path")  //  core modul
const hbs = require("hbs")

const express = require("express")

// console.log(__dirname)  //  __ -> beépített változót jelent


const app = express()

//  Út meghatározások az express config-hoz
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//  Handlebars engine feltelepítése és a views helye
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//  Statikus útvonal beállítása a serve-höz
app.use(express.static(publicDirectoryPath))

app.get("", (req,res)  => {
    res.render("index.hbs", {
        title: "Időjárás",
        name: "Kalmár István"
    })
})

app.get("/about", (req,res) => {
    res.render("about", {
        title: "Rólam",
        name: "Kalmár István"
    })
})

app.get("/help", (req,res) => {
    res.render("help", {
        helpText: "Ez egy segítő szöveg",
        title: "Segítség",
        name: "Kalmár István"
    })
})

// app.get('', (req, res) => {
//     res.send('<h1>Időjárás</h1>')  //  a send() methoddal visszaküldhetünk valamit a kérés küldőjének
// })

app.get("/weather", (req, res) => {
    res.send({
        location: "London",
        forecast: "30 fok"
    })
})

app.get("/help/*", (req,res) => {
    res.render("404.hbs", {
        title: "404",
        name: "Kalmár Istán",
        errorMessage: "Segítő cikket nem találtam meg."
    })
})

app.get("*", (req, res) => {  //  * = wirld card character
    res.render("404.hbs", {
        title: "404",
        name: "Kalmár István",
        errorMessage: "Nem találtam meg a keresett oldalt."
    })
})

app.listen(3000, () => {
    console.log("A szerver a 3000-es porton fut.")
})  //  a szerverkészítés egy aszinkron művelet. a web szerver sosem áll le, csak ha leállítjuk. az a dolga hogy fusson és figyeljen és feldolgozzon bejövő kéréseket.

