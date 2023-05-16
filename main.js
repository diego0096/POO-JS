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
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const miguel = new Student2({
  name: "Miguel",
  age: 28,
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

class Student3 {
  constructor({
    name,
    lastname
  })
}

const diego1 = {
  nombre: 'Diego',
  username: 'diego0096',
  points: 100,
  socialMedia: {
    twitter: 'diego0096',
    instagram: 'diego0096',
    facebook: undefined,
  },
  approvedCourses: [
    'Curso Definitivo de HTML y CSS',
    'Curso Practico de HTML y CSS'
  ],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
        'Curso de Responsive Design',
      ]
    },
    {
      name: 'Escuela de Videojuegos',
      courses: [
        'Curso de Introducción a la Programación de Vgs',
        'Curso de Unreal Engine',
        'Curso de Unity 3D',
      ],
    },
  ],
};

const felipe1 = {
  nombre: 'Felipe',
  username: 'felipe0096',
  points: 100,
  socialMedia: {
    twitter: 'felipe0096',
    instagram: 'felipe0096',
    facebook: undefined,
  },
  approvedCourses: [
    'Curso DataBussiness',
    'Curso de DataViz',
  ],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
        'Curso de Responsive Design',
      ]
    },
    {
      name: 'Escuela de Data Science',
      courses: [
        'Curso DataBussiness',
        'Curso de DataViz',
        'Curso de Tableau',
      ],
    },
  ],
};