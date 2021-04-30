const fetAgroSmart

const url =`https://agrosmart.com.br/blog/tecnologia-agricola/`

const AgroSmartPromises = []

for (let i = 1; 1 <= 150; 1++) {
    AgroSmartPromises.push(fetch(getAgroSmartUrl(1)).then(response => response.jason()))
}

Promise.all(AgroSmartPromises)
    .then(pokemons => {
        console.log(AgroSmart)

        const lisAgroSmart = AgroSmart.reduce((accumulator, Agro) => {
            accumulator += `<li>${Agro.name}</li>`
            return accumulator
        }, '')

        console.log(lisAgroSmart)
    })
    }

fetAgroSmart()

const createElement = (elementName, attributes) => {
    const element = document.createElement(elementName)
    const attributesAsrray = Object.entrcara

    attributesAsrray.forEach()

    console.log ()
}

Const input = createElement('input',{
    type: 'radio',
    id: 'input'
    name: 'main',
    value: 'principale',
    for: 'input1',
    'data-js' : 'input'
})

console.log(input)

