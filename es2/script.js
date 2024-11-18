// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



console.clear();
function generaEmail() {
    const url = `https://flynn.boolean.careers/exercises/api/random/mail`;
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (i = 0; i < 19; i++) {
        axios.get(url).then(risposta => {
            lista.innerHTML += `<li>${risposta.data.response}</li>`;
        })
    }
}
document.getElementById("bottone").addEventListener("click", generaEmail);
generaEmail();


