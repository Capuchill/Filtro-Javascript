import { Concepto } from "./concepto.js"
import { crearTarjetaConcepto } from "./tarjetaConcepto.js"
import { eliminarObjeto } from "./eliminar.js"

let listaConceptos = [] 

if (JSON.parse(localStorage.getItem("dataConceptos"))) {
    listaConceptos = JSON.parse(localStorage.getItem("dataConceptos"))
} 

function crearConcepto(){
    let id = document.getElementById("idConcepto").value
    let tipo = document.getElementById("tipoConcepto").value
    let descripcion = document.getElementById("descripcionConcepto").value
    let puntos = document.getElementById("puntosConcepto").value
    
    let vacio = false

    if (id.trim()==="" ||
        tipo.trim()==="seleccionar" ||
        descripcion.trim()==="" ||
        puntos.trim()==="" 
       ){
        vacio= true
    }

    if (vacio) {
        alert("Llene correctamente los campos")
    }
    else{

        let existe = false

        listaConceptos.forEach(concepto => {
            if (concepto.id == id) {
                existe = true
            }
        });

        if (existe) {
            alert("Este id de concepto ya existe, intenta con otro")
        } else {
            let concepto = new Concepto(id,tipo,descripcion,puntos)
            listaConceptos.push(concepto)
            localStorage.setItem("dataConceptos",JSON.stringify(listaConceptos))
            alert("Concepto creado!")
            mostrarConceptos()
        }
    }

    
}



function eliminarConcepto(btn){
    let id = btn.getAttribute("data-id-concepto")
    eliminarObjeto(id,listaConceptos)
    localStorage.setItem("dataConceptos",JSON.stringify(listaConceptos))
    mostrarConceptos()
}

let contenedorAgregar = document.getElementById("containeAgregar")
let contenedorDescontar = document.getElementById("containerDescontar")

function mostrarConceptos(){
    contenedorAgregar.innerHTML = ""
    contenedorDescontar.innerHTML = ""
    let container = ""
    listaConceptos.forEach(element => {
        if (element.tipo == "agregar"){
            container = contenedorAgregar
        }
        else{
            container = contenedorDescontar
        }
        let tarjeta = crearTarjetaConcepto(element)
        container.insertAdjacentHTML("beforeend", tarjeta)
    });
}

window.crearConcepto = crearConcepto
window.addEventListener("load",mostrarConceptos)
window.eliminarConcepto = eliminarConcepto