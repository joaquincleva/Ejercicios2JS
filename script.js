i=0;
document.write("Comparación entre dos números:")
document.write("<br>")
alert('Ingrese dos números para saber cuál es mayor.')
do {
    if(i>0){
        alert('No ha ingresado números correctos')
    }
    x=window.prompt('Ingrese un número positivo','Número 1')
    num1=parseInt(x)
    y=window.prompt('Ingrese un número positivo','Número 2')
    num2=parseInt(y)
    i++;
    
} while (num1<0 || num2<0 || isNaN(num1) || isNaN(num2));
document.write("Primer número ingresado: ", num1)
document.write("<br>")
document.write("Segundo número ingresado: ", num2)
document.write("<br>")
if(num1>num2){
    alert(num1 + ' es mayor que '+num2)
    document.write("El mayor es: ", num1)
} else if (num2>num1){
    alert(num2 + ' es mayor que '+num1)
    document.write("El mayor es: ", num2)
} else {
    alert('Los números son iguales.')
    document.write("Los número son iguales.")
}
document.write("<br>")
document.write("<hr>")
document.write("Suma y promedio en un bucle:")
document.write("<br>")
i=0;
valor=0, sumatotal=0;
while (valor>=0 && !isNaN(valor)) {
    x=window.prompt('Ingrese un número positivo para sumarlo. Ingrese un número positivo u otro tipo de dato para salir.','Número')
    if(!isNaN(x)){
        valor=parseInt(x)
        if(valor>=0){
            sumatotal+=valor;
            i++;
        }
    } else {
        alert('No ha ingresado un número.')
    }
}
promedio = sumatotal/i;
alert('La suma total es: '+sumatotal)
document.write("La suma total es: ",sumatotal)
document.write("<br>")
alert('El promedio de la suma es :'+promedio)
document.write("El promedio de la suma es: ",promedio)
document.write("<br>")
document.write("<hr>")
document.write("Números entre dos números ingresados: ")
valor1=0, valor2=0;
do {
    x=window.prompt('Ingrese el primer número de una lista de números.','Número')
    valor1=parseInt(x)
    if(isNaN(valor1)){
        alert('No ha ingresado un número.')        
    }
}while (isNaN(valor1))
do {
    x=window.prompt('Ingrese el segundo número de una lista de números.','Número')
    valor2=parseInt(x)
    if(isNaN(valor2)){
        alert('No ha ingresado un número.')        
    }
} while (isNaN(valor2))
if(valor1<valor2){
    for(valor1;valor1<=valor2;valor1++){
        document.write(valor1, " ")
    }
} else if(valor1>valor2){
    for(valor2;valor1>=valor2;valor2++){
        document.write(valor2, " ")
    }
} else {
    document.write("Los números son iguales.")
}
document.write("<br>")
document.write("<hr>")
document.write("Números impares entre dos números ingresados: ")
valor1=0, valor2=0;
do {
    x=window.prompt('Ingrese el primer número de una lista de números impares.','Número')
    valor1=parseInt(x)
    if(isNaN(valor1)){
        alert('No ha ingresado un número.')        
    }
} while (isNaN(valor1))
do {
    x=window.prompt('Ingrese el segundo número de una lista de números impares.','Número')
    valor2=parseInt(x)
    if(isNaN(valor2)){
        alert('No ha ingresado un número.')        
    }
} while (isNaN(valor2))
if(valor1<valor2){
    for(valor1;valor1<=valor2;valor1++){
        if(valor1%2!=0){
            document.write(valor1, " ")
        }
    }
} else if(valor1>valor2){
    for(valor2;valor1>=valor2;valor2++){
        if(valor2%2!=0){
            document.write(valor2, " ")
        }
    }
} else {
    document.write("Los números son iguales.")
}