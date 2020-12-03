class student {
    constuctor(name){
        this._name = name
    }
    run(params){
        console.log(params)
    }
    get name(){
        return this._name
    }
    setname(newname){
        this._ma,e = newname
    }
}
const t = new student('Test')
t.setname('m1')
console.log(name);