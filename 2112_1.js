const form = document.querySelector('#form')  
const inputValue = document.querySelector('#input-value')
const lista = document.querySelector('#lista')

form.addEventListener('submit',(event) => {
    event.preventDefault()

    const newDiv = document.createElement('div')
    newDiv.className = 'newDiv'   //kreiranje div elementa
    
        const paragraf = document.createElement('p')
        paragraf.textContent = inputValue.value    //kreiranje p elementa

        const button = document.createElement('button')
        button.textContent = 'X'   //kreiranje button elementa

        button.addEventListener('click',(e) => {
            newDiv.remove()  //na klik se brise red
        })
               
        newDiv.append(paragraf,button) //div nasledjuje paragraf i button

    lista.appendChild(newDiv)
    inputValue.value = ''
})

