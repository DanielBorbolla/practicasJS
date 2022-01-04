function programa4(){
const lista = [];
let pregunta = "s"
do{
    
    lista.push(prompt("ingresa un nombre"))
    pregunta = prompt("quieres ingresar un nuevo nombre? s o n")
}
while (pregunta == "s")

console.log(lista.length)

for (let i=0; i<lista.length; i++){
    console.log(lista[i])
    

}
}