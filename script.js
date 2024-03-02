let INTENTO = 6;
const PALABRA = "APPLE";
let verde = '#79b851'
let amarillo = '#f3c237'
let gris = '#a4aec4'
let tieneVidas = 6;
 document.getElementById("guess-button")
.addEventListener("click",() =>{
    const INTENTO = leerIntento();
    if (PALABRA === INTENTO){
    console.log("Ganaste!")
    return;
    }
for ( const i in INTENTO){
    if (INTENTO [i]  === PALABRA [i]){
        console.log (INTENTO[i,"VERDE"]);
    }else if (PALABRA.includes(INTENTO[i])){
        console.log(INTENTO[i],"AMARILLO");
    } else{
        console.log(intento [i], "GRIS")
    }
    }
    tieneVidas --;
    if(!tieneVidas){
        console.log("perdiste!")
    }
    });
function leerIntento(){
    const input = document.getElementById("guess-input");
    const valor = input.value.toUpperCase();
    return valor;
}
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("GANASTE!😀");
        return;
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
function terminar(mensaje){
    let p = document.getElementById("guesses");
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    p.innerHTML ="<h1>" + mensaje + "<h1>";
}
