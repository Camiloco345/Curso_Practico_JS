const Numbers = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    5,
    4,
    5,
    4,
    5,
    4,
    5
] 



const NumbersCount = {}

Numbers.map(
    function(elemento){

        if(NumbersCount[elemento]){

            NumbersCount[elemento] += 1    
        }
        else{
            NumbersCount[elemento] = 1
        }
        

    }
)

const NumbersArray = Object.entries(NumbersCount).sort(
    function(Acumulado, NuevoValor){
       return Acumulado[1] - NuevoValor[1]
    }
)

let Moda = NumbersArray[NumbersArray.length-1]