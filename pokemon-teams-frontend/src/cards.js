function formatTrainerCards(trainers){
  return trainers.map(formatTemplate).join('')
}

function formatTemplate(trainer){
  const pokemons = trainer.pokemons
  const formattedPokemons = formatTrainerPokemonCards(pokemons)
  return `<div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
    <button class="add" data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul>
    ${formattedPokemons}
    </ul>
  </div>`
}

function formatTrainerPokemonCards(pokemons){
  return pokemons.map(function(pokemon) {
    return `<li>${pokemon.nickname} (${pokemon.species})
    <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    </li>`
  }).join('')
}

function newPokemonForm(trainerDiv, formDiv){
  formDiv.innerHTML = `
  <form class="new-pokemon">
  <input type="text" id="species" placeholder="Enter Species"></input>
  <input type="text" id="nickname" placeholder="Enter a Nickname"></input>
  <input type="hidden" id="trainerId" value="${trainerDiv.querySelector('button').dataset.trainerId}"></input><br>
  <input type="submit" id="submit" value="Add Pokemon!"></input>
  </form>`
  const submitForm = document.querySelector('#submit')
  submitForm.addEventListener('click', submitNewPokemon)
}

function renderNewForm(e){
    let trainerDiv = e.target.parentElement
    let formDiv = trainerDiv.querySelector('ul')
    formDiv.innerHTML = ''
    newPokemonForm(trainerDiv, formDiv)
  }

function submitNewPokemon(e){
  e.preventDefault();
  let species = e.target.parentElement.querySelector('#species').value
  let nickname = e.target.parentElement.querySelector('#nickname').value
  let trainerId = e.target.parentElement.querySelector('#trainerId').value
  Adapter.addPokemon(species, nickname, trainerId)
  .then(nothing => Adapter.getTrainers()).then(displayTrainerCards)
}

function deletePokemon(e){
  const pokemonId = e.target.dataset.pokemonId
  e.target.parentElement.remove()
  Adapter.releasePokemon(pokemonId)
}
