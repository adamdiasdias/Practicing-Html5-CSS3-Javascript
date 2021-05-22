// Procurar o botão 
document.querySelector("add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {

    const newfieldsContainer = document.querySelector('."schedule-item').cloneNode(true) // boolean: true ou false
    
    const fields = newfieldsContainer.querySelectorAll ('input')

    fields.forEach(function(fields) {
        fields.valeu =""
    })

    document.querySelector('#schedule-itens') .appendChild(newfieldsContainer)
}



