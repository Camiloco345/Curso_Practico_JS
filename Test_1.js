// calculo de altura de un triangulo isoceles

let Lado1 = 10
let Lado2 = 10
let Base = 7

const alturaTriangulo = (Lado1, Lado2, Base) => {

 if(Lado1==Lado2&&Lado1!=Base){
    console.log("Es un triangulo isoceles")

   let Altura = Math.sqrt(Math.pow(Lado1,2)-Math.pow(Base,2)/4)
   console.log("La altura es: " + Altura)

 }
 else if(Lado1==Lado2&&Lado2==Base){
    console.log("No es un triangulo isoceles")
 } 
}
