// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


console.clear();

function ciclo() {
    const url = `https://flynn.boolean.careers/exercises/api/random/mail`;

    const vuoto = [];
    for (let i = 0; i < 10; i++) {
        axios.get(url).then(risposta => {
            vuoto.push(risposta.data.response);


        });
    };






}
ciclo();