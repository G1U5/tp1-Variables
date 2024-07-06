const numero1 = parseInt(prompt('Ingrese un número'))
const numero2 = parseInt(prompt('Ingrese un número'))
if(numero1 > numero2){
    document.write(`El ${numero1} es el número mas grande`)
}
else if(numero2 > numero1){
    document.write(`El ${numero2} es el número mas grande`)
}else{
    document.write("Ambos números son iguales")
}