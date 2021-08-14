
    let CalcularDescuento = (PrecioOriginal, Descuento) =>{
    const PorcentajePrecioConDescuento = 100 - Descuento
    const PrecioConDescuento = (PrecioOriginal*PorcentajePrecioConDescuento)/100
    
    return PrecioConDescuento
}
let CalculoDeDescuento = () =>{
    let Valor = document.getElementById("Valor")
    let priceValue = Valor.value

    let Descu = document.getElementById("Descu")
    let DiscountValue = Descu.value

    let PrecioFinal = CalcularDescuento(priceValue,DiscountValue)
    
    let FinalPrice = document.getElementById("FinalPrice")
    
    FinalPrice.innerText = "El pricio final es:" + PrecioFinal


}