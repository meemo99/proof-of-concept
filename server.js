console.log('Hier komt je server voor Sprint 12.')
app.get('/dashboard/:city', async function (req, res) {
    const apiResponse = await fetch('https://fdnd-agency.directus.app/items/ctc_smartzone/?filter[city][_eq]=${req.params.city}')
    const apiResponseJSON = await apiResponse.json()
    res.render('dashboard.liquid', { city: apiResponseJSON.data })
})
