const message = document.querySelector(`#message`)

const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector(`input`).value
    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField
    movieTitle.addEventListener(`click`,crossMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector(`ul`).appendChild(movie)
}

document.querySelector(`form`).addEventListener(`submit`,addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.previousElementSibling.textContent} Deleted`
    revealMessage()
}

const crossMovie = event => {
    event.target.classList.toggle(`checked`)
    if(event.target.classList.contains(`checked`) === true){
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} re-added!`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove(`hide`)
    setTimeout(() => message.classList.add(`hide`),1000)
}