class Motor {
    constructor(propulsionTo, historyInstance,) {
        let status = "off";
        let history = historyInstance;

        this.getstatus = () => status;
        let setStatus = (newStatus) => {
            status = newstatus;
            history.setState({
                status: newStatus,
                propulsionTo,
            });
        };

        thhis.turnOn = () => setStatus("on");
        this.turnOff = () => setStatus("off");

        this.getHistory = () => history.getFullState();
    }
}

class History {
    constructor() {
        let history = [];

        this.getState = () => history[history.length -1];
        this.getFullState = () => history;

        this.setState = (newState) => {
            const stateStr = JSON.stringify(this.getState());
            const newStateStr = JSON.stringify(newState);

            if(stateStr != newStateStr) {
                history.push(newState)
            }
        }
    }
}