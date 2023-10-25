class Estudiante{
    constructor(id,nombres,telefono,correo,grupo,campCoins=0){
        this.id = id
        this.nombres = nombres
        this.telefono = telefono
        this.correo = correo
        this.grupo = grupo
        this.campCoins = campCoins
    }
}
export{Estudiante}