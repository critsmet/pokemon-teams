const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const Adapter = {
  getTrainers: function(){
    return fetch(TRAINERS_URL).then(resp => resp.json())
  },
  addPokemon: function(pokemonNickname, pokemonSpecies, trainerId){
      return fetch(POKEMONS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        nickname: pokemonNickname,
        species: pokemonSpecies,
        trainer_id: parseInt(trainerId)}
      )
    })
  },
  releasePokemon: function(id){
    fetch(POKEMONS_URL + `/${id}`, {
      method: 'DELETE'
    })
  }
}
