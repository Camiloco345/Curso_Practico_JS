//Helpers

let esPar = (numero)=>{
    return (numero %2 === 0)
}


//Calculando la mediana general


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

//Cacluladora de mediana
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

//Top 10%
let spliceStart = salariosColSorted.length * 0.90
let spliceCount = salariosColSorted.length - spliceStart

let salariosTop = salariosColSorted.splice(spliceStart, spliceCount)
