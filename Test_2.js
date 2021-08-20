
    let CalcularDescuento = (PrecioOriginal, Descuento) =>{
    const PorcentajePrecioConDescuento = 100 - Descuento
    const PrecioConDescuento = (PrecioOriginal*PorcentajePrecioConDescuento)/100
    
    return PrecioConDescuento
}
//funcion de calculo de descuento general
let CalculoDeDescuento = () =>{
    let Valor = document.getElementById("Valor")
    let priceValue = Valor.value

    let Descu = document.getElementById("Descu")
    let DiscountValue = Descu.value

    let PrecioFinal = CalcularDescuento(priceValue,DiscountValue)
    
    let FinalPrice = document.getElementById("FinalPrice")
    
    FinalPrice.innerText = "El pricio final es:" + PrecioFinal

    //Funcio de calculo de descuento con el cupon
    let CalcularCupon =()=>{

        let Cupon = document.getElementById("Cupon")
        
        let prueva = PrecioFinal/10

        Cupon.innerText = "El pricio final es:" + prueva
}
    CalcularCupon()

}