const gameslist = document.querySelector ('[data-js="games-list" ]')
const db = firebase.firestore()

db.collection('games').get()
.then(snapshot=>{
    const gamesLis = snapshot.docs.reduce((acc, doc) => {
        acc += '<li>${doc.data().title}</li>'
        return acc
    }, '')

    gameslist.innerHTML = gamesLis
})
.catch(err => { 
    console.log(err.message)
 })