const natalia = {
  name: "Natalia",
  edad: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
}; // Objeto literal

// Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function(nuevoCurso) {
  //     this.cursosAprobados.push(nuevoCurso)
  // }
}
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["Curso de INtroducción a los Videojuegos", "Curso de Creación de Personajes"],
)