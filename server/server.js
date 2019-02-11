const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controllers/combo_controller')
//RENAME YOUR CONTROLLER TO ANYTHING YOU WANT

const app = express()
app.use(express.json())

app.get('/api/combos', ctrl.getCombos)

app.post('/api/combo', ctrl.createCombo)

app.delete(`/api/combo/:id`, ctrl.deleteCombo)

app.put(`/api/combo/:id`, ctrl.updateCombo)

// USE A DIFFERENT PORT IF YOU WANT
const PORT = 3333
// CHANGE THE CONSOLE LOG IF YOU WANT
app.listen(PORT, () => console.log(`Houston we have lift off on Port ${PORT}!!! 👍`))
