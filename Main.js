//este es el codigo para calcular los cuadrados
console.group("Cuadrados")
let lado = 20

console.log("Los lados del cuadrado miden :" + lado)


const perimetro = lado*4

console.log("El perimetro del cuadrado es: " + perimetro)

const area = lado * lado

console.log("El area del cuadrado es: " + area + "cm2")

console.groupEnd("Fin")

//Codigo del calculo del triangulo
console.group("triangulos")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 8
const alturaTriangulo = 7

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo

console.log("el perimetro del triangulos es: " + perimetroTriangulo)

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

console.log("El area del triangulo es: " + areaTriangulo)
console.groupEnd("fin")

//Calculo del Circulo

console.group("Circulos")

const Radio = 5
let Diametro = (Radio*2)
const pi = Math.PI

const areaCirculo = (Radio*Radio) * pi

console.log("el area del circulo es: " + areaCirculo)

console.groupEnd("fin")