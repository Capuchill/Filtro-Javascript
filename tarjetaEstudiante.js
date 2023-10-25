function crearTarjetaEstudiante(estudiante) {
    let tarjeta = `
    <tr>  
    <th>${estudiante.id}</th>
    <td>${estudiante.nombres}</td>
    <td>${estudiante.correo}</td>
    <td>${estudiante.telefono}</td>
    <td>${estudiante.grupo}</td>
    <td>${estudiante.campCoins}</td>
    <td><button onclick="eliminarEstudiante(this)" data-id-estudiante="${estudiante.id}" class="btn btn-danger">ELIMINAR</button></td>
    <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEstudiante${estudiante.id}">
        MODIFICAR
    </button></td> 
    </tr>

<div class="modal fade" id="modalEstudiante${estudiante.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modificar a: ${estudiante.nombres}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="">ID</label>
            <input type="number" value="${estudiante.id}" id="ideEstudiante${estudiante.id}" class="form-control">
            <label for="">NOMBRE COMPLETO</label>
            <input type="text" value="${estudiante.nombres}" id="nombreeStudiante${estudiante.id}" class="form-control">
            <label for="">TELEFONO</label>
            <input type="number" value="${estudiante.telefono}" id="telefonoeEstudiante${estudiante.id}" class="form-control">
            <label for="">CORREO</label>
            <input type="email" value="${estudiante.correo}" id="correoeEstudiante${estudiante.id}" class="form-control">
            <label for="">GRUPO</label>
            <input type="text" value="${estudiante.grupo}" id="grupoEstudiante${estudiante.id}" class="form-control">
            <label for="">CAMPCOINS</label>
            <input type="number" value="${estudiante.campCoins}" id="campCoinsEstudiante${estudiante.id}" class="form-control">
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="modificarEstudiante(this)" data-id-estudiante="${estudiante.id}">FINALIZAR</button>
        </div>
    </div>
    </div>
</div>
`
    return tarjeta
}

export{crearTarjetaEstudiante}