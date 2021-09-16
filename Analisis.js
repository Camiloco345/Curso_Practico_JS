const salariosCol = Salarios.map(
    function (persona){
        return persona.salary
    }
)

const salariosColSorted = salariosCol.sort(
    function(acumulado, nuevo){
       return acumulado - nuevo
    }
)


let esPar = (numero)=>{
    return (numero %2 === 0)
}

let medianaSalarios = (lista) =>{
    let mitad = parseInt(lista.length / 2) 

    if (esPar(lista.length)){
        let mediana = (lista[mitad] + lista[mitad - 1]) /2
        return mediana 
    }
    else{
       let mediana = lista[mitad]
       return mediana
    }

}