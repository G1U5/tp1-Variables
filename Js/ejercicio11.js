const num = parseInt(prompt("Ingrese un número"))
const divisibles = []
if(num % 2 === 0){
    divisibles.push(2)
}if(num % 3 === 0){
    divisibles.push(3)
}if(num % 5 === 0){
    divisibles.push(5)
}if(num % 7 === 0){
    divisibles.push(7)
}

if(divisibles.length > 0) {
    document.write(`El ${num} es divisible por los siguientes numeros : `+ divisibles.join(', '));
}else{
    document.write(`El ${num} no es divisible por 2, 3, 5, o 7`)
}