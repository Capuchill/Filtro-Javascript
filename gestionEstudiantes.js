import { eliminarObjeto } from "./eliminar.js";
import { crearTarjetaEstudiante } from "./tarjetaEstudiante.js";
import {Estudiante} from "./estudiante.js"

let listaEstudiantes = []

if (JSON.parse(localStorage.getItem("dataEstudiantes"))) {
    listaEstudiantes = JSON.parse(localStorage.getItem("dataEstudiantes"))
} 

function registrarEstudiante(){
    let id = document.getElementById("idEstudiante").value;
    let nombre = document.getElementById("nombresEstudiante").value; 
    let tlf = document.getElementById("tlfEstudiante").value;
    let correo = document.getElementById("correoEstudiante").value;
    let grupo = document.getElementById("grupoEstudiante").value;
    
    let vacio = false

    if(id.trim()==""||
    nombre.trim()==""||
    tlf.trim()==""||
    correo.trim()==""||
    grupo.trim()==""){
        vacio = true
    }

    if(vacio){
        alert("Por favor, no deje campos vacios")
    }
    else{

        let existe = false

        listaEstudiantes.forEach(cliente => {
            if (cliente.id == id) {
                existe = true
            }
        });

        if (existe) {
            alert("Este Camper ya se necuentra registrado")
        } else {
            let estudiante = new Estudiante(id,nombre,tlf,correo,grupo)
            listaEstudiantes.push(estudiante)
            localStorage.setItem("dataEstudiantes",JSON.stringify(listaEstudiantes))
            alert("Registro exitoso!")
            mostrarEstudiantes()
        }
    }
}

let contenedorEstudiantes = document.getElementById("contenedorEstudiantes")

function mostrarEstudiantes(){
    contenedorEstudiantes.innerHTML = ""
    listaEstudiantes.forEach(element => {
        let tarjeta = crearTarjetaEstudiante(element)
        contenedorEstudiantes.insertAdjacentHTML("beforeend", tarjeta)
    });
}

function eliminarEstudiante(btn){
    let id = btn.getAttribute("data-id-estudiante")
    eliminarObjeto(id,listaEstudiantes)
    localStorage.setItem("dataEstudiantes",JSON.stringify(listaEstudiantes))
    mostrarEstudiantes()
}

function modificarEstudiante(btn){
    alert("aqui modifica")
    
    let idEstudiante = btn.getAttribute("data-id-estudiante")
    
    let id = document.getElementById("ideEstudiante"+idEstudiante)
    let nombres = document.getElementById("nombreeStudiante"+idEstudiante)
    let tlf =  document.getElementById("telefonoeEstudiante"+idEstudiante)
    let correo = document.getElementById("correoeEstudiante"+idEstudiante)
    let campCoins= document.getElementById("campCoinsEstudiante"+idEstudiante)
    let grupo = document.getElementById("grupoEstudiante"+idEstudiante)

    let vacio = false

    if (id.value.trim()==="" ||
        nombres.value.trim()==="" ||
        tlf.value.trim()==="" ||
        correo.value.trim()==="" ||
        campCoins.value.trim()==="" ||
        grupo.value.trim()===""){
        vacio= true
    }

    if(vacio){
        alert ("No deje espacios vacios")
        mostrarEstudiantes()
    }
    else{

        listaEstudiantes.forEach(estudiante => {

            if(estudiante.id == id.value){
                alert("despues del for")
                estudiante.id = id.value
                estudiante.nombres = nombres.value
                estudiante.telefono = tlf.value
                estudiante.correo = correo.value
                estudiante.grupo = grupo.value
                estudiante.campCoins = campCoins.value
                if (Array.isArray(listaEstudiantes) && listaEstudiantes.every(item => typeof item === 'object')) {
                    alert("se envio al local")
                    localStorage.setItem("dataEstudiantes", JSON.stringify(listaEstudiantes));
                    mostrarEstudiantes()
                    alert("modificado con exito")
                } else {
                console.error("listaEstudiantes no es una estructura de datos válida para almacenar en localStorage.");
                }
               
            }else{
                alert("nooooooooooooooo")
            }
        }); 
    }
}

let buscarCliente = document.getElementById("buscarEstudiante")

buscarCliente.addEventListener("keyup", ()=>{
    let clienteBuscado = buscarCliente.value.toLowerCase();
    contenedorEstudiantes.innerHTML = "";
    for (let cliente of listaEstudiantes){
        let nombreCliente = cliente.nombres.toLowerCase();
        if (nombreCliente.indexOf(clienteBuscado) !== -1){
            let tarjeta = crearTarjetaEstudiante(cliente)
            contenedorEstudiantes.insertAdjacentHTML("beforeend", tarjeta)
        }else if(clienteBuscado==' '){
            alert('madure')
        }
    }
    if (contenedorEstudiantes.innerHTML.trim() === "") {
        contenedorEstudiantes.innerHTML= `<p style="color: blue;">Este camper no se encuentra registrado</p>`
    }
})

window.modificarEstudiante = modificarEstudiante
window.registrarEstudiante = registrarEstudiante
window.eliminarEstudiante = eliminarEstudiante
window.addEventListener("load", mostrarEstudiantes())

