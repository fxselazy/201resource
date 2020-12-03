class Person {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    toString() { 
        return `Person(n:${this.name} w:${this.weight} h:${this.height})`; 
    }
}

var people = [
    new Person('Sompong', 70, 170),
    new Person('Somchai', 75, 180),
    new Person('Somjai', 48, 165),
    new Person('Somsri', 52, 168)
];

for (let v of people) {
    //  console.log(v.toString());
}

intarray = [7,8,3,9,2];
for (let v of intarray) {
    // console.log(v);
}

//1. console.log(`sum intarray = ${sum(intarray,f)}`);
function sum(ar,f){
    let total = 0;
    for(let v of ar){ total += f(v);}
    return total;
}
console.log(`sum height = ${sum(people,p=>p.height)}`);
console.log(`sum weight = ${sum(people,p=>p.weight)}`);
console.log(`avg intarray = ${sum(intarray,i=>i)}`);

//2.write a function to compute avg of ... in array and return avg
function avg(ar,f){
    let total = 0;
    let avg = 0;
    for(let v of ar){total += f(v)}
    avg = total/ar.length;
    return avg;
}
console.log(`avg height = ${avg(people,p=>p.height)}`)
console.log(`avg weight = ${avg(people,p=>p.weight)}`)
function accum(ar,f,type='sum'){
    let total = 0;
    for(let v of ar){total += f(v);}
    return type =='avg'?total/ar.length:total;
}
console.log(`sum height(acc)=${accum(people,p=>p.height)}`)
console.log(`avg height(acc)=${accum(people,p=>p.height,'avg')}`)

//3.compute the avg of BMI of everyone
//BMI = kg_weight / (meter_height**2)
function BMI(ar,fW,fH){
    let BMI = 0;
    for(v of ar){
        BMI += fW(v)/(fH(v)/100)**2;
    }
    return BMI/ar.length;
}
console.log(BMI(people,p=>p.weight,p=>p.height));
console.log(`avg BMI = ${avg(people,p=>p.weight/(p.height/100)**2)}`)

//4.function ration(ar,f1,f2){} sum f1,f2 and avg f1,f2
function avg_ratio(ar,f1,f2){
    return sum(ar,f1)/sum(ar,f2);
}
console.log(`avg weight/height ratio = ${avg_ratio(people,p=>p.weight,p=>p.height)}`)
console.log(`avg height = ${avg_ratio(people,p=>p.height,p=>1)}`)
console.log(`avg weight = ${avg_ratio(people,p=>p.weight,p=>1)}`)
console.log(sum(people,p=>1));

//5.write a function to compute sum of ... in array and return sum
function sum(ar,f){
    let total = 0;
    for(let v of ar){ total += f(v);}
    return total;
}
console.log(`sum height = ${sum(people,p=>p.height)}`);
console.log(`sum weight = ${sum(people,p=>p.weight)}`);
console.log(`avg intarray = ${sum(intarray,i=>i)}`);