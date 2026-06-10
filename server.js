console.log('Hier komt je server voor Sprint 12.')
import express from 'express'

import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
const engine = new Liquid({
    root: './views',
    extname: '.liquid'
})

app.engine('liquid', engine.express())
app.set('view engine', 'liquid')
app.set('views', './views')

app.get('/', async function (req, res) {
    const apiResponse = await fetch(`https://fdnd-agency.directus.app/items/ctc_smartzone/`)
    const apiResponseJSON = await apiResponse.json()
    res.render('index.liquid', { cities: apiResponseJSON.data })
})

app.get('/dashboard/:city', async function (req, res) {
    const cityResponse = await fetch(`https://fdnd-agency.directus.app/items/ctc_smartzone/?filter[city][_eq]=${req.params.city}`)
    const cityResponseJSON = await cityResponse.json()
    res.render('dashboard.liquid', { cities: cityResponseJSON.data })
})

app.get('/dashboard/:city/:address', async function (req, res) {
    const apiResponse = await fetch(`https://fdnd-agency.directus.app/items/ctc_smartzone/?filter[address][_eq]=${req.params.address}`)
    const apiResponseJSON = await apiResponse.json()
    res.render('details.liquid', { spot: apiResponseJSON.data[0] })
})
app.get('/form', async function (req, res) {

    res.render('form.liquid')
})


app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
    console.log(`Project draait  http://localhost:${app.get('port')})}`)
})