function videoPlay(id) {
    const urlSecreta = "https//platzisecreto.cpm" + id;
    console.log('Se esta produciendo desde la url ' + urlSecreta);
};
function videoStop(id) {
    const urlSecreta = "https//platzisecreto.cpm" + id;
    console.log('Pausamos la url ' + urlSecreta);
};

export class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    };

    reproducir() {
        videoPlay(this.videoID);
    };
    
    pausar() {
        videoStop(this.videoID);
    }
};

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const diego2 = new Student({
    name: "Diego",
    username: "diego0096",
    email: "dfqz93@hotmail.com",
    twitter: "diego0096",
});

const felipe2 = new Student({
    name: "Felipe",
    username: "felipe0096",
    email: "dfqz06@hotmail.com",
    twitter: "felipe0096",
});

class LearnigPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
};

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if(nuevoNombre === 'Curso Malo de Programación Básica') {
            console.error('Nombre no permitido');
        } else {
            this._name = nuevoNombre;
        }
    }
};

const cursoProgBasica = new Course({
    name: 'Curso de Programación Basica',
});

// cursoProgBasica.name
// Devuelve el curso de programación básica

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
});

const cursoPracticpHTML = new Course({
    name: 'Curso Practico de HTML y CSS',
});

const escuelaWeb = new LearnigPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticpHTML,
    ],
});

const escuelaData = new LearnigPaths({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgBasica,
        'Curso Data Bussiness',
        'Curso DataViz',
    ],
})

const escuelaVgs = new LearnigPaths({
    name: 'Escuela de Videojuegos',
    courses: [
        cursoProgBasica,
        'Curso Unity',
        'Curso Unreal Engine',
    ],
});