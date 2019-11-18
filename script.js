var lancio_dado = Math.floor(Math.random() *6) +1;
console.log(lancio_dado);
//lancio del dado del computer random


var lancio_giocatore = parseInt(prompt("inserisci un numero"));
//inserimento lancio giocatore

if(isNaN(lancio_giocatore)) {
    console.log("numero non inserito");
    
    
}
else if (lancio_giocatore < 1 || lancio_giocatore > 6) {
    console.log("non e' stato inserito un numero corretto");
    //errore nel caso inserito numero errato
}
else {
    console.log("lancio_giocatore");
    if(lancio_dado > lancio_giocatore) {
        console.log("hai perso");
    //condizione con giocata vitnta computer    
    } else if (lancio_dado == lancio_giocatore) {
        console.log("hai pareggiato");
    //condizione della giocata in pareggio    
    } else {
        console.log("hai vinto");
    // condizione con vittoria del giocatore    
    }
    
    
}
