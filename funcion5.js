function programa5(){
const lista = [];
const calificaciones =[];
const promedios =[];
const estados =[];
let pregunta = "s"
do{
    let boleta = [];
    let suma = 0;
    let status = "aprovado";
    promedio = 0;
    lista.push(prompt("Nombre del alumno"))
    boleta.push(Number(prompt("matematicas")))
    boleta.push(Number(prompt("ingles")))
    boleta.push(Number(prompt("historia")))
    boleta.push(Number(prompt("literatura")))
    for(let i=0; i<boleta.length; i++){
        suma += boleta[i];
    }
    calificaciones.push(boleta)
    promedio = (suma/boleta.length)
 
    promedios.push(promedio)
    if(promedio<7){
        status = "reprovado";
    }
    estados.push(status);
   
    pregunta = prompt("quieres ingresar un nuevo nombre? s o n")
}
while (pregunta == "s")

console.log(lista.length)

for (let i=0; i<lista.length; i++){
    console.log(lista[i]+" "+calificaciones[i]+" "+ promedios[i]+ " "+ estados[i])
    

}
}