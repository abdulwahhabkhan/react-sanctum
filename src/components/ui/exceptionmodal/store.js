
function Store() {
    this.counter = 0;
    this.add = () => {};

    this.addException = exception => {
        this.counter += 1;
        return this.add(exception);
    };

    this.removeException = () => {};
    this.register = ({ addException, removeException }) => {
        this.add = addException;
        this.removeException = removeException;
    };

    return this;
}

export default new Store();