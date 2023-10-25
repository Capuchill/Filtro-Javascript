function eliminarObjeto(id,lista){
    if(confirm("Esta seguro de eliminar?")){
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            if (element.id == id){
                lista.splice(i,1)
                alert("Eliminado con éxito!")
            }
        }
    }
   
}

export{eliminarObjeto}