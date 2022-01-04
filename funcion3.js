function programa3(){
    let num1 = 0;
    let num2 = 0;
    let opcion =1;

    opcion = Number(prompt("elige una opción"))
    num1 = Number(prompt("ingresa tu número"))
    if (opcion === 1){
        document.getElementById("programa3").innerHTML += 2*num1
    }
    else if (opcion === 2){
        num2 = Number(prompt("ingresa el segundo número"))
        document.getElementById("programa3").innerHTML += num1*num2
    }
    else{
        document.getElementById("programa3").innerHTML += "opción no válida"
    }
    
    }

    
