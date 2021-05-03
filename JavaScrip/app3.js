const gamesLis = document.querySelector ('[data-js="games-list"]')
const db = Firebase.firestore()

db.collection('games').get()
.then(snapshot=>{
    const gamesLis = snapshot.docs.reduce((acc, doc) => {
        const { title, developedBy, createdAt } =doc.data ()

        acc += `<li class="my-4">
        <h5>${title} </h5>

        <ul>

        <li>Desenvolvio por &{developedBy}</li>
        <li>Adicionado no banco em ${createdAt} </li>
        </ul>
        </li>`

        return acc

    },'')

    gameslist.innerHTML = gameslist

 })

 const fetAgroSmart

 const url =`htt://agrosmart.com.br/blog/tecnologia-agricola/`

 const AgroSmartPromises = []

 for (let i = 1; 1 <= 150; 1++) {
     AgroSmartPromises.push(fetch(getAgroSmartUrl(1)).then(response => response.jason())
 }

 Promise.all(AgroSmartPromises)
 .then(pokemons => {
     console.log(fetAgroSmart)

     const lisAgroSmart = fetAgroSmart.reduce((Accumulator, agro) => {
         Accumulator += `<li>${Agro.name}</li>`
         return Accumulator
     }, '')

     console.log(lisAgroSmart)

    })
    }

fetAgroSmart ()

const createElement = (elementName, attributes) => {
    const element = document.createElement(elementName)
    const attributesAsrray = Object.entreies(attributes)

    attributesAsrray.forEach(([key, value])  => element.setAttribute(key, value))

    return element
    
}

const input = createElement('input',)
    type: 'radio',
    id: 'input'
    name: 'main',
    value: 'principale',
    for: 'input1'
    'data-js' : 'input'

})

console.log(input)


