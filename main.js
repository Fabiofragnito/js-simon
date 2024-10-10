// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.



    // let numbers = [];  /* creo un array di 5 random numbers */ 
    // for (let i = 0; i < 5; i++) { /* faccio un ciclo per iterare 5 numeri e li pusho nella array nembers */
    //     numbers.push(Math.floor(Math.random()*100)+1);        
    // }
 

    // const numberContainer = document.getElementById("randomNumbers") /* creo un container dove visualizzare i numeri */
    // const p = document.createElement('p') /* creo un elemeto p */
    // numberContainer.appendChild(p); /* aggiungo il p al div */


    function generateRandomNumber() {
        let numbers = [];
        for (let i = 0; i < 5; i++) { /* faccio un ciclo per iterare 5 numeri e li pusho nella array nembers */
            numbers.push(Math.floor(Math.random()*100)+1);        
        }
        const numberContainer = document.getElementById("randomNumbers") /* creo un container dove visualizzare i numeri */
        const p = document.createElement('p') /* creo un elemeto p */
        p.textContent = numbers.join(' ') /* aggiungo i numeri al p */
        numberContainer.appendChild(p); 
        
        console.log(numbers);
    }
    generateRandomNumber()


    /* parte un timer di 30s */

    // con setTimeout

    function ShowInputs() {
        const numberContainer = document.getElementById('randomNumbers')/* recupero un container x gli input */
        numberContainer.innerHTML = '' /* pulisco dai numeri messi in precedenza */

        /* creo 5 input */
        for (let i = 0; i < 5; i++) {
            const input = document.createElement('input')
            input.type = 'number';
            input.placeholder = "inserire un numero";
            numberContainer.appendChild(input); /* inserito input nel container */
            
        } 
    }

    setTimeout(ShowInputs, 30000)
    /* invoco funzine e imposto 30s di attesa */