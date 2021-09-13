const lista1 = [
    100,
    200,
    500,
    40000000,
    100000,

]

//mitad de la lista creada
mitad = parseInt(lista1.length/2)


//funcion para determianr si la lista es par o no
let esPar =(lista) => {
    
    if(lista1.length %2 == 0){
        return true
    }
    else{
        return false
    }
    
}

let mediana;

//condicional de elección
if(esPar(lista1.length)){
    
    mediana = (lista1[mitad]+lista1[mitad-1])/2
}
else{
    mediana = lista1[mitad]

}
