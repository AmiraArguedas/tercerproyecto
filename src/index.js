/////////////////////////////declaracion de variables//////////////////////////////////////////

const lista = document.querySelectorAll("div")
const divs = document.getElementsByClassName("divs")
const botonReiniciar = document.getElementById("botonReiniciar")
const turnoX = document.getElementById("turnoX")
const turnoO = document.getElementById("turnoO")
const empate = document.getElementById("empate")

variableGane = "0"

turnoX.innerText = ""
turnoO.innerText = ""
empate.innerText = ""

let mensajeX = ""
let mensajeO = ""

let limpiar = "0"


function validarGane() {

gane = "0"

///////////////////////////////validacion ganar X filas/////////////////////////////////////////////

    if (divs[0].textContent === "X" && divs[1].textContent === "X" && divs[2].textContent === "X") {
        gane = "X"   
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"                                                                   
                  
                }
                            
    if (divs[3].textContent === "X" && divs[4].textContent === "X" && divs[5].textContent === "X") {
        gane = "X"   
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"   

                }
                                                    
    if (divs[6].textContent === "X" && divs[7].textContent === "X" && divs[8].textContent === "X") {
        gane = "X"  
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"   

                }
                            
                                
///////////////////////////////validacion ganar X columnas/////////////////////////////////////////////

    if (divs[0].textContent === "X" && divs[3].textContent === "X" && divs[6].textContent === "X") {
        gane = "X" 
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"                              
                    }

    if (divs[1].textContent === "X" && divs[4].textContent === "X" && divs[7].textContent === "X") {
        gane = "X" 
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"                         
                    }
                
    if (divs[2].textContent === "X" && divs[5].textContent === "X" && divs[8].textContent === "X") {
        gane = "X"     
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"                                
                    }

///////////////////////////////validacion ganar X diagonales/////////////////////////////////////////////

    if (divs[0].textContent === "X" && divs[4].textContent === "X" && divs[8].textContent === "X") {
        gane = "X"  
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"                             
                }

    if (divs[2].textContent === "X" && divs[4].textContent === "X" && divs[6].textContent === "X") {
        gane = "X" 
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"    
                }

///////////////////////////////validacion ganar O filas/////////////////////////////////////////////

    if (divs[0].textContent === "O" && divs[1].textContent === "O" && divs[2].textContent === "O") {
        gane = "O"   
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"                              
                }

    if (divs[3].textContent === "O" && divs[4].textContent === "O" && divs[5].textContent === "O") {
        gane = "O"
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"   
                }
    
    if (divs[6].textContent === "O" && divs[7].textContent === "O" && divs[8].textContent === "O") {
        gane = "O"
        for (let index = 0; index < divs.length; index++) 
            divs[index].style.pointerEvents = "none"   
                }

///////////////////////////////validacion ganar O columnas/////////////////////////////////////////////

    if (divs[0].textContent === "O" && divs[3].textContent === "O" && divs[6].textContent === "O") {
        gane = "O" 
                }

    if (divs[1].textContent === "O" && divs[4].textContent === "O" && divs[7].textContent === "O") {
        gane = "O"                                                                  
                }
                
    if (divs[2].textContent === "O" && divs[5].textContent === "O" && divs[8].textContent === "O") {
        gane = "O"                                                                                  
                }

///////////////////////////////validacion ganar O diagonales/////////////////////////////////////////////

    if (divs[0].textContent === "O" && divs[4].textContent === "O" && divs[8].textContent === "O") {
        gane = "O"                                                                               
                }

    if (divs[2].textContent === "O" && divs[4].textContent === "O" && divs[6].textContent === "O") {
        gane = "O"                                                                                                   
                }

    return gane
}



///////////////recorrido de la lista -divs- y evento al seleccionar casilla////////////////////
               
for (let index = 0; index < lista.length; index++) {

    lista[index].addEventListener("click" , function () {


///////////////////////////////agregar X en el juego///////////////////////////////////////////

    lista[index].innerHTML = "X";
    lista[index].style.pointerEvents = "none";
    lista[index].style.color = "green";
    lista[index].style.backgroundColor = "black";

    variableGane = validarGane()


        if (limpiar === 1) {
            lista[index].innerHTML = ""; 
            lista[index].style.color = "";
            lista[index].style.backgroundColor = "black";
        }

    
    if (variableGane === "X") {
        turnoX.innerText = "GANO X";
        lista[index].style.pointerEvents = "none";

        limpiar = "1"
    } 
 
/////////////////////lista vacia y validacion de espacios vacios///////////////////////////////

    let nuevaLista = []

    for (let index = 0; index < lista.length; index++) {
            
        if (lista[index].textContent === "") {
            
            nuevaLista.push(index)                       
        }

    }


/////////////////////creacion y seleccion de numero aleatorio ///////////////////////////////

        let numeroAleatorio = Math.floor(Math.random() * nuevaLista.length)
        let nuevaPosicion = nuevaLista[numeroAleatorio]

    
///////////////////////////////agregar O en el juego//////////////////////////////////////////

    if (nuevaLista.length > 0) {
        lista[nuevaPosicion].innerHTML = "O"; 
        lista[nuevaPosicion].style.backgroundColor = "black" 

        if (limpiar===1) {
            
            lista[nuevaPosicion].innerHTML = ""; 
            lista[nuevaPosicion].style.color = "" 
            lista[nuevaPosicion].style.backgroundColor = "black"  
        }

        lista[nuevaPosicion].style.pointerEvents = "none"  
        lista[nuevaPosicion].style.color = "blue" 
       
    }  


        variableGane = validarGane()
                 
        if (variableGane === "O"){
            turnoO.innerText = "GANO O"
            lista[index].style.pointerEvents = "none"

            limpiar = "1"
        }
 

/////////////////////////boton reiniciar - recarga la pagina///////////////////////////////////////

        botonReiniciar.addEventListener("click", function () {
            location.reload()
        })

                                      
///////////////////////////////////validacion empates/////////////////////////////////////////////////   

    if (nuevaLista.length === 0) {

        if (gane === "0") {
            empate.innerText = "EMPATE"
            console.log("empate");  
        }


    }











     
        }
    )
}






