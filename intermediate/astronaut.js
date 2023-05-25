function simulador(astronaut, spaceShip, direction) {
    astronaut.navigate(spaceShip, direction);
    return spaceShip._movements;
}

class Astronaut {
    constructor({
        name,
    }) {
        this.name = name;
        let _spaceShipKey = undefined;
        this.setAccesKey = (accesKey) => {
            _spaceShipKey = accesKey;
        };

        this.navigate = (spaceShip, direction) => {
            spaceShip.navigator(direction, {accesKey: _spaceShipKey});
        }
    }
}

class spaceShip {
    constructor({
        key,
    }) {
        this._key = key;
        this._movements = [];
        this.getAccesKey = (astronaut) => {
            const isAstronaut = astronaut instanceof Astronaut;

            if(isAstronaut) {
                astronaut.setAccesKey(this._key);
            }
        }

        this.navigator = (direction, {accesKey}) => {
            if(_key == accesKey) {
                this._movements.push(direction)
            } else {
                this._movements.push("Incorrect acces key")
            }
        }
    }
}