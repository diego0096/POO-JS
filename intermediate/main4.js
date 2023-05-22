function isObject(subject) {
    return typeof subject == "object";
};

function isArray(subject) {
    return Array.isArray(subject);
};

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    };

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    };
    return copySubject;
};

/* class SuperObject {
    static isObject(subject) {
        return typeof subject == "object";
    };
} */

function SuperObject() {}

SuperObject.isObject = function(subject) {
    return typeof subject == "object";
};

SuperObject.deepCopy = function(subject) {
    let copySubject;
    
        const subjectIsArray = isArray(subject);
        const subjectIsObject = isObject(subject);
    
        if (subjectIsArray) {
            copySubject = [];
        } else if (subjectIsObject) {
            copySubject = {};
        } else {
            return subject;
        };
    
        for (key in subject) {
            const keyIsObject = isObject(subject[key]);
    
            if (keyIsObject) {
                copySubject[key] = deepCopy(subject[key]);
            } else {
                if (subjectIsArray) {
                    copySubject.push(subject[key]);
                } else {
                    copySubject[key] = subject[key];
                }
            }
        };
        return copySubject;
}



function requiredParam(param) {
    throw new Error(param + " es obligatorio");
};

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {

    this.name = name;
    this.courses = courses;
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {

    this.name = name;
    this.age = age;
    this.email = email;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"];
        },
        set(newLp) {
            if (newLp instanceof LearningPath) {
                private["_learningPaths"].push(newLp);
            } else {
                console.warn("Lp de los learningPaths no es una instancia del prototipo LearningPath");
            }
        },
    });

    for (learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex];
    };
}

const escuelaWeb = new LearningPath({
    name: "Escuela de web",
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
});

const diego  = new Student({
    name: "Juan",
    email: "dfqz93@hotmail.com",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});