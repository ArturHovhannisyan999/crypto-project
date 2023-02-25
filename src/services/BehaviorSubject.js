import Observable from "./Observable";

class BehaviorSubject {
    constructor(value){
        this.value = value;
        this.observers = [];
    }

    next(value){
        this.value = value;
        this._notify()
    }

    subscribe(callback){
        const observer = new Observable(callback);
        this.observers.push(observer);
        return {
            unSubscribe: () => this._unSubscribe(observer.id)
        }
    }

    _unSubscribe(id) {
        this.observers = this.observers.filter(elm =>elm.id !== id)
    }

    getValue(){
        return this.value
    }

    _notify(){
        this.observers.forEach(({method})=>{
            method(this.value)
        })
    }
}

export default BehaviorSubject