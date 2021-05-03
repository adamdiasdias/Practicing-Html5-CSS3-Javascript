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