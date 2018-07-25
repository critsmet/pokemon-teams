const main = document.querySelector('main')

Adapter.getTrainers().then(displayTrainerCards)

document.body.addEventListener('click', handleClick)

function displayTrainerCards(trainers){
  const cards = formatTrainerCards(trainers)
  main.innerHTML = cards
}

function handleClick(e){
  e.preventDefault();
  const hasRoom = e.target.parentElement.querySelectAll('li')
  if(hasRoom.length <= 6){
    alert("You have enough Pokemon! ")
  }
  if(e.target.className === 'add'){
    renderNewForm(e)
  } else if(e.target.className === 'release'){
    deletePokemon(e)
  }
}
