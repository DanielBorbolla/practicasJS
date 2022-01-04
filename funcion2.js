function programa2(){
    let usuario = document.getElementById("Usuario").value;
    let edad = document.getElementById("Edad").value;
    let w = Number(edad);
    if (w >= 18){
        document.getElementById("programa2").innerHTML =  "hola " + usuario + " puedes votar";
    }
    else {
        let letra = usuario[2]
        switch (letra){
            case 'a' :
            case 'e' :
            case 'i' :
            case 'o' :
            case 'u' :
        document.getElementById("programa2").innerHTML =  usuario + " puedes votar solo por esta ocación";
        break
        default:
        document.getElementById("programa2").innerHTML =  usuario + " lo siento eres menor de edad";
        }
    }
    
}