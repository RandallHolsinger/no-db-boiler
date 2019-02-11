// RENAME THIS FILE TO SOMETING THAT MAKES SENSE FOR YOUR PROJECT
let combos = [
  {
    id:1,
    sandwich: 'Super Manwich',
    chips: 'Jalepano Chips',
    drink: 'Mr. P'
  },
  {
   id:2,
   sandwich: 'Super Manwich Supreme',
   chips: 'XTRA Man Chips',
   drink: 'Dr. Dynomite'
 },
 {
   id:3,
   sandwich: 'Super Manwich Light',
   chips: 'Zero Fat No Fun chips',
   drink: 'Diet Lame'
 }
]
let id = 4

module.exports = {
  getCombos: (request, response) => {
    response.status(200).send(combos)
  },
  createCombo: (request, response) => {
    const {sandwich, chips, drink} = request.body;
    combos.push({
      id,
      sandwich,
      chips,
      drink
    })
    id++
    response.status(200).send(combos)
  },
  deleteCombo: (request, response) => {
    const {id} =  request.params;
    const index = combos.findIndex(combo => combo.id == id);
    combos.splice(index, 1);
    response.status(200).send(combos)
  },
  updateCombo: (request, response) => {
    const {id} = request.params
    const {sandwich, chips, drink} = request.body
    let index = combos.findIndex(combo => combo.id == id)
    let foundCombo = combos[index]

    foundCombo = {
      id: foundCombo.id,
      sandwich: sandwich || foundCombo.sandwich,
      chips: chips || foundCombo.chips,
      drink: drink || foundCombo.drink
      };
      combos.splice(index, 1, foundCombo);
      response.status(200).send(combos)

  }

  
};
