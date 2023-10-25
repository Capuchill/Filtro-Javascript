function crearTarjetaConcepto(concepto){
    let tarjeta = `<tr>
    <th scope="row">${concepto.id}</th>
    <td>${concepto.descripcion}</td>
    <td>${concepto.puntos}</td>
    <td><button onclick="eliminarConcepto(this)" data-id-concepto="${concepto.id}" class="btn btn-danger">ELIMINAR</button></td>
    </tr>`
    return tarjeta
}

export {crearTarjetaConcepto}