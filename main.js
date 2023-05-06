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
    ["Curso de Introducción a los Videojuegos", "Curso de Creación de Personajes"],
);

// Prototpos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = []
    }) {
        this.name = name;
        this .age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new Student2({
    name: "Miguel",
    age:28,
    email: "dfqz93@hotmail.com",
});
// class Student2 {
//     constructor(name, age, cursosAprobados) {
//         this.name = name;
//         this .age = age;
//         this.cursosAprobados = cursosAprobados;
//     }
//     aprobarCurso(nuevoCurso) {
//         this.cursosAprobados.push(nuevoCurso);
//     }
// }

// const miguel = new Student2(
//     "Miguel",
//     28,
//     ["Curso de Analisis de Negocios para Ciencia de Datos", "Curso de Principios de visualización de Datos para BI"]
// );