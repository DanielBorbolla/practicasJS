

  class Alumno{
    constructor(nombre,grupo, matematicas, espanol, geografia, ingles, sociales){
      this.nombre=nombre;
      this.grupo=grupo;
      this.matematicas=Number(matematicas);
      this.espanol=Number(espanol);
      this.geografia=Number(geografia);
      this.ingles=Number(ingles);
      this.sociales=Number(sociales);
     
  }
  // calcularPromedio(){
  //  this.promedio=(this.matematicas+this.espanol+this.geografia+this.ingles+this.sociales)/5
  //  this.guardarStatus();
  // }
 calcularPromedio(){
 return (this.matematicas+this.espanol+this.geografia+this.ingles+this.sociales)/5
 
}
  guardarStatus(){
    
    return this.calcularPromedio() < 7 ? 'Reprobo' : 'Aprobo';
  }
  
}

let Lista =[]; 
function Guardar(){

  let Nombre = document.getElementById("NOM").value;
  let Grup = document.getElementById("Grupo").value;
  let Matematicas = document.getElementById("Mate").value;
  let Espanol = document.getElementById("Esp").value;
  let Geografia = document.getElementById("Geo").value;
  let Ingles = document.getElementById("Ing").value;
  let Sociales = document.getElementById("Soc").value;
  
  nuevoAlumno = new Alumno(Nombre,Grup,Matematicas,Espanol,Geografia,Ingles,Sociales)
  
   Lista.push(nuevoAlumno)
   console.log(Lista);
   document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoAlumno.nombre+"</td><td>"+nuevoAlumno.grupo+"</td><td>"+nuevoAlumno.matematicas+"</td><td>"+nuevoAlumno.espanol+"</td><td>"+nuevoAlumno.geografia+"</td><td>"+nuevoAlumno.ingles+"</td><td>"+nuevoAlumno.sociales+"</td><td>"+nuevoAlumno.calcularPromedio()+"</td><td>"+nuevoAlumno.guardarStatus()+"</td></tbody>"
   
 }