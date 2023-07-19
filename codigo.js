function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} 

let nombre = ""
nombre = prompt("What is your player name?")
alert ("Welcome! " + nombre)

    function eleccion(jugada) {
        let resultado = "" 
        if(jugada == 1) {
            resultado = "Rock🪨"
        } else if(jugada == 2) {
            resultado = "Paper🧻"
        } else if(jugada == 3) {
            resultado = "Scissors✂️"
        } else {
            resultado = "Null"
        }  
        return resultado
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

    while (triunfos < 3 && perdidas < 3) {
        pc = aleatorio (1, 3)
        jugador = prompt("Choose 1 for Rock🪨, 2 for Paper🧻 o 3 for Scissors✂️")
        //alert("Elegiste " + jugador)

        alert("PC choise: " + eleccion(pc))
        alert("Your choise: " + eleccion(jugador))

        // COMBATE
        if(pc == jugador) {
            alert("Tie")
        } else if(jugador == 1 && pc == 3) {
            triunfos = triunfos + 1
            alert("You won! " + nombre)
        } else if(jugador == 3 && pc == 2)  {
            triunfos = triunfos + 1
            alert("You won! " + nombre)
        } else if(jugador == 2 && pc == 1) { 
            triunfos = triunfos + 1
            alert("You won! " + nombre)
        } else {
            perdidas = perdidas + 1
            alert("Aww you lost :( " + nombre)
            
        }

}   

alert("You won  " + triunfos + " times. You lost " + perdidas + " times.")
