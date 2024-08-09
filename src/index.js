/////////////////////////////declaracion de variables//////////////////////////////////////////

const lista = document.querySelectorAll("div")
const divs = document.getElementsByClassName("divs")
const botonReiniciar = document.getElementById("botonReiniciar")
const turnoX = document.getElementById("turnoX")
const turnoO = document.getElementById("turnoO")

variableGane = "0"

turnoX.innerText = ""
turnoO.innerText = ""


///////////////recorrido de la lista -divs- y evento al seleccionar casilla////////////////////
               
for (let index = 0; index < lista.length; index++) {

    lista[index].addEventListener("click" , function () {


///////////////////////////////agregar X en el juego///////////////////////////////////////////

        lista[index].innerHTML = "X"
        lista[index].style.pointerEvents = "none"
        lista[index].style.color = "green"
        lista[index].style.backgroundColor = "black"


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
                            }                           
 
        console.log(lista);
        console.log(nuevaLista);

/////////////////////////boton reiniciar - recarga la pagina///////////////////////////////////////

        botonReiniciar.addEventListener("click", function () {
            location.reload()
        })

///////////////////////////////validacion ganar X filas/////////////////////////////////////////////

                            if (divs[0].textContent === "X" && divs[1].textContent === "X" && divs[2].textContent === "X") {
                                 variableGane = "1"
                                            turnoX.innerText = "Gano1 - X"                       

                                   for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"   
                                   }
                                    

                            if (divs[3].textContent === "X" && divs[4].textContent === "X" && divs[5].textContent === "X") {
                                variableGane = "1"
                                            turnoX.innerText = "Gano2 - X";

                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                      }
                                            
                                
                            if (divs[6].textContent === "X" && divs[7].textContent === "X" && divs[8].textContent === "X") {
                                variableGane = "1"
                                            turnoX.innerText ="Gano3 - X";

                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                    }
                                
                                            

///////////////////////////////validacion ganar X columnas/////////////////////////////////////////////

                            if (divs[0].textContent === "X" && divs[3].textContent === "X" && divs[6].textContent === "X") {
                                variableGane = "1"
                                turnoX.innerText = "Gano4 - X";

                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                            }

                            if (divs[1].textContent === "X" && divs[4].textContent === "X" && divs[7].textContent === "X") {
                                variableGane = "1"
                                turnoX.innerText = "Gano5 - X";

                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                         
                                            }
                                        
                            if (divs[2].textContent === "X" && divs[5].textContent === "X" && divs[8].textContent === "X") {
                                variableGane = "1"
                                turnoX.innerText = "Gano6 - X";

                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                                   
                                            }

///////////////////////////////validacion ganar X diagonales/////////////////////////////////////////////

                            if (divs[0].textContent === "X" && divs[4].textContent === "X" && divs[8].textContent === "X") {
                                variableGane = "1"
                                turnoX.innerText = "Gano7 - X";

                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                            
                                        }

                            if (divs[2].textContent === "X" && divs[4].textContent === "X" && divs[6].textContent === "X") {
                                variableGane = "1"
                                turnoX.innerText = "Gano8 - X";
                                           
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                        }


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////validacion ganar O filas/////////////////////////////////////////////

                            if (divs[0].textContent === "O" && divs[1].textContent === "O" && divs[2].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano1 - O";
                                           
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                               
                                        }

                            if (divs[3].textContent === "O" && divs[4].textContent === "O" && divs[5].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano2 - O";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                        }
                            
                            if (divs[6].textContent === "O" && divs[7].textContent === "O" && divs[8].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano3 - O";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                        }

///////////////////////////////validacion ganar O columnas/////////////////////////////////////////////

                            if (divs[0].textContent === "O" && divs[3].textContent === "O" && divs[6].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano4 - O";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"
                                        }

                            if (divs[1].textContent === "O" && divs[4].textContent === "O" && divs[7].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano5 - 0";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                                                                    
                                        }
                                        
                            if (divs[2].textContent === "O" && divs[5].textContent === "O" && divs[8].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano6 - O";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                                                                                  
                                        }

///////////////////////////////validacion ganar O diagonales/////////////////////////////////////////////

                            if (divs[0].textContent === "O" && divs[4].textContent === "O" && divs[8].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano7 - O";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                                                                                
                                        }

                            if (divs[2].textContent === "O" && divs[4].textContent === "O" && divs[6].textContent === "O") {
                                variableGane = "1"
                                turnoO.innerText = "Gano8 - O";
                                          
                                    for (let index = 0; index < divs.length; index++) 
                                                divs[index].style.pointerEvents = "none"                                                                                                    
                                        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                
///////////////////////////////////validacion empates/////////////////////////////////////////////////   

                        if (nuevaLista.length === 0 || (turnoX.innerText != "" || turnoO.innerText != "")) {
                            if (variableGane === "0") {
                                console.log("empate");  
                            }else{
                            console.log("ganaste");

                            }
                        }

     
    })
}






