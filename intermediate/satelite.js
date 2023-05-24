function simulacion({
    satelite,
    estacion,
    astronauta,
    texto,
}) {
    satelite.send({
        from: astronauta,
        to: estacion,
        text: texto,
    });

    return satelite.messages;
}

class Astronaut {
    constructor({
        name,
    }) {
        this.name = name;
    }
}

class SpaceStation {
    constructor({
        name,
    }) {
        this.name = name;
        this.team = [];
    }

    addTeamMember(newMember) {
        if(newMember instanceof Astronaut) {
            this.team.push(newMember.name);
        }
    }
}

class Satelite {
    constructor({
        name,
    }) {
        this.name = name;
        this.messages = [];
    }

    send({
        from,
        to,
        text,
    }) {
        this.messages.push({
            from: from.name,
            to: to.name,
            text,
        });
    }
}