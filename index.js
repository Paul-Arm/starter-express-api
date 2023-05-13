const express = require('express')
const app = express()
const CyclicDb = require("@cyclic.sh/dynamodb")
const db = CyclicDb("busy-erin-sawfish-coatCyclicDB")

const games = db.collection("games")


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.all('/set', (req, res) => {
    console.log("Just got a request!")
    games.set("1",{
        Name:"test",
        gens:4,
        map: "test map"
    })
    res.send('all set !')
})


app.all('/all', async (req, res) => {
    console.log("Just got a request!")
    let item = await games.get("1")
    res.send(item)
})
app.listen(process.env.PORT || 3000)