class Observable{
    constructor(method){
        this.method = method;
        this.id = Date.now();
    }
}
export default Observable;