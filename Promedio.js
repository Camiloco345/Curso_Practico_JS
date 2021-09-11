
let calcularPromedio = (lista) => {

    /* let sumaLista = 0;

    for(i=0;i < lista.length;i++){
        sumaLista = sumaLista + lista[i];
    }
 */
    const sumaLista = lista.reduce(
        function (acumulado = 0, nuevoElemto){
            return acumulado + nuevoElemto
        }
    )
    

    let promedioLista = sumaLista/lista.length

    return promedioLista


}