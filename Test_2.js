let PrecioOriginal = 100
let Descuento = 15


let CalcularDescuento = (PrecioOriginal, Descuento) =>{
    const PorcentajePrecioConDescuento = 100 - Descuento
    const PrecioConDescuento = (PrecioOriginal*PorcentajePrecioConDescuento)/100
    
    console.log("El precio final es: " + PrecioConDescuento)
}