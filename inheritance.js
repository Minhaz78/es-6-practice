class parent {
    constructor(){
        this.fatherName = "Nazir Ahmed";

    }
}
class child extends parent {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;  }
}
const baby = new child("minhaz");
const baby2 = new child("khan");
console.log(baby.getFullName(),baby2.getFullName());