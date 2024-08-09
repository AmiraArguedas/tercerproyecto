/////////////////////////////declaracion de variables//////////////////////////////////////////

const lista = document.querySelectorAll("div")
const divs = document.getElementsByClassName("divs")
const botonReiniciar = document.getElementById("botonReiniciar")
const turnoX = document.getElementById("turnoX")
const turnoO = document.getElementById("turnoO")

variableGane = "0"

turnoX.innerText = ""
turnoO.innerText = ""

let mensajeX = ""
let mensajeO = ""



function validarGane() {

gane = "0"

///////////////////////////////validacion ganar X filas/////////////////////////////////////////////

    if (divs[0].textContent === "X" && divs[1].textContent === "X" && divs[2].textContent === "X") {
        gane = "X"                     
                }
                            
    if (divs[3].textContent === "X" && divs[4].textContent === "X" && divs[5].textContent === "X") {
        gane = "X"   
                }
                                                    
    if (divs[6].textContent === "X" && divs[7].textContent === "X" && divs[8].textContent === "X") {
        gane = "X"  
                }
                            
                                
///////////////////////////////validacion ganar X columnas/////////////////////////////////////////////

    if (divs[0].textContent === "X" && divs[3].textContent === "X" && divs[6].textContent === "X") {
        gane = "X"                            
                    }

    if (divs[1].textContent === "X" && divs[4].textContent === "X" && divs[7].textContent === "X") {
        gane = "X"                       
                    }
                
    if (divs[2].textContent === "X" && divs[5].textContent === "X" && divs[8].textContent === "X") {
        gane = "X"                                  
                    }

///////////////////////////////validacion ganar X diagonales/////////////////////////////////////////////

    if (divs[0].textContent === "X" && divs[4].textContent === "X" && divs[8].textContent === "X") {
        gane = "X"                            
                }

    if (divs[2].textContent === "X" && divs[4].textContent === "X" && divs[6].textContent === "X") {
        gane = "X"  
                }

///////////////////////////////validacion ganar O filas/////////////////////////////////////////////

    if (divs[0].textContent === "O" && divs[1].textContent === "O" && divs[2].textContent === "O") {
        gane = "O"                              
                }

    if (divs[3].textContent === "O" && divs[4].textContent === "O" && divs[5].textContent === "O") {
        gane = "O"
                }
    
    if (divs[6].textContent === "O" && divs[7].textContent === "O" && divs[8].textContent === "O") {
        gane = "O"
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


    if (variableGane === "X") {
        turnoX.innerText = "GANO X";
        ///break;
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
        lista[nuevaPosicion].style.pointerEvents = "none"  
        lista[nuevaPosicion].style.color = "blue" 
        lista[nuevaPosicion].style.backgroundColor = "black"    

        variableGane = validarGane()

        if (variableGane === "O") {
            turnoO.innerText = "GANO O";
            ///break;
        }
    }                           
 
        console.log(lista);
        console.log(nuevaLista);

/////////////////////////boton reiniciar - recarga la pagina///////////////////////////////////////

        botonReiniciar.addEventListener("click", function () {
            location.reload()
        })

                                      
///////////////////////////////////validacion empates/////////////////////////////////////////////////   

    if (nuevaLista.length === 0 || (turnoX != "" || turnoO != "")) {
        if (variableGane === "0") {
            console.log("empate");  
        }else{
            for (let index = 0; index < divs.length; index++) 
                            divs[index].style.pointerEvents = "none"
        console.log("ganaste");

        }
    }

     
        }
    )
}






