/* 
ช่วงนี้กุไม่ร้อนเงินหรอก แต่ปลายเดือนกุร้อนแน่
พร้อมเพย์ 0942890990
กสิกร 0398672496
true-wallet 0942890990 
promtpay 0957392420
*/

/*
 *     OOP in JS
 *    -มี value (เหมือน Attribute ใน Java)
 *    -มี property เก็บอยู่ (property value, property function)
 *    -สร้างได้โดยไม่ต้องใช้ Class  **Java ต้องใช 
 */

//Object creation (3วิธี)
//1. ใช้ {}


let person = {name:"kkboy"};    //สร้าง object person มี property value ชื่อ name เก็บค่า kkboy

let tabElem = document.createElement('table') 
tabElem.setAttribute("border", 1)

let borderAttr = document.createAttribute("border")
borderAttr.value = 1
tabElem.setAttributeNode(borderAttr)
document.body.bgColor = "red"   
//2. สร้างจาก Class
person = new Object();      //สร้าง object person
person.name = "kkboy";          //ใส่ property value ชื่อ name เก็บค่า kkboy

//3. ใช้ method --> Object.create(Object);
person = Object.create({name:"kkboy"});

//เรียก property ได้ 2วิธี
person.name;
person["name"];
//ถ้าไม่มี property อยู่แล้วเรากำหนดค่าให้เลยจะสร้างใหม่ เช่น person.surname = "abc"; แต่ถ้าเรียกเฉยๆก็ไม่เกิดอะไรขึ้น

//function in Object creation
//Syntax : function (param){ code };
person = {
    name : "kkboy",
    greeting : function(){
        console.log("Hello " + this.name);
    }
}

person.greeting = function(){
    console.log("Hello " + person.name);
};

// ** เขียน function เปล่าๆก็ได้ เอาไว้เรียกใช้ในไฟล์
function people(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.greeting = function(){     //เขียน function ใน function ก็ได้ เอาไว้เรียกใช้ใน function นั้นๆ แต่ต้องมี property มารองรับ
        console.log("Hello " + this.name);
    }

    // this.greeting();
}

//ถ้าเรียก new object แต่ใช้ชื่อ function ก้ได้มันจะมอง function ตัวนั้นเป็น constructor
person = new people("kkboy", 48, "teacher");
// person.greeting();

//การสร้าง Class
class Rectangle{
    constructor(width, height){     //ประกาศ global variable ในนี้ โดยใช้ this.ชื่อ (เป็น prototype)
        this._width = width;        //ตอนประกาศใส่ _ไว้หน้าชื่อ (เพื่ออะไรซักอย่างแต่ถ้าไม่ใส่ละเขียน get set มันจะ stackoverflow)
        this._height = height;
    }
    
    area(){                         //สร้าง function ใน class ไม่ต้องเขียน function เพราะเขียน () ตามหลังมันก็รู้แล้ว
        return this._width*this._height;
    }
    
    get width(){                    //get set ใน class จะเขียนแบบนี้
        return this._width;
    }
    set width(width){
        this._width = width;
    }
    toString(){                     //toString เขียนงี้
        return "width = " + this._width + ", heigth = " + this._height + ", area = " + this.area();
    }
}

//ข้อมูลใน object จะถูกเปลี่ยนตาม object ที่เอาเราไปใช้ด้วย
let point = {x:10, y:30};   //สร้าง object point
let newPoint = point;       //ให้ newPoint = point
newPoint.x = 30;            //เปลี่ยนค่า x ที่ newPoint ค่า x ใน point จะเปลี่ยนตาม

//การแก้ไขการเข้าถึงของ property จะใช้ Object.defineProperty(Obj, propertyName, {attribute:...});
person = {
    _name : "kkboy"
};
Object.defineProperty(person, "name", {
    writable : true,            // แก้ไขตรงๆได้/ไม่ได้
    enumerable : true,          // นับใน for-in loop ได้/ไม่ได้
    configurable : true,        // ลบได้/ไม่ได้ (แก้ค่าตรงๆก็ถือเป็นการลบ)
    value : person._name        // ค่าของ property **ห้ามลืมใส่
});
Object.defineProperty(person, "name",{
    get(){                      //เขียน get ใหม่
        return this._name;
    },
    set(name){
        this._name = name;      //เขียน set ใหม่
    }
});

//method ที่ใช้กับ object
person.hasOwnProperty("name");                  //เช็ค property ว่ามีไหม
Object.prototype.isPrototypeOf(person);         //เช็คว่าเป็นต้นแบบหรือเปล่า () class
person.valueOf();                               //เอา value

//prototype chaining
//prototype เกิดขึ้นเมื่อ new object จาก class หรือ create object จาก object อื่น
let item = new Object();                //item มี Object เป็น prototype
let bossItem = Object.create(item);     //bossItemp มี item เป็น prototype

//javaScript บอกไว้ว่า 'object แต่ละตัวจะมี property ของตัวเอง' แต่ก็อาจจะมี property จาก object อื่นด้วย
let o = {};                     
o.x = 5;                        //o มี property x เป็นของตัวเอง
let p = Object.create(o);       
p.y = 3;                        //p มี property y เป็นของตัวเอง แต่ใช้ x ได้
let q = Object.create(p);       
q.z = 1;                        //q มี property z เป็นของตัวเอง แต่ใช้ x,y ได้

//การเทียบ object
//3วิธี (referential, manual, shallow equlity)

let student = {name : "a"};
let newStudent = {name : "a"};
let oldStudent = {name : "b"};
let godStudent = student;

//referential คือ ใช้ ==, ===, Object.is(obj1,obj2); ซึ่งใช้อันไหนก็เหมือนกัน
//มันจะดู location ของ property ว่าที่เดียวกันทุกตัวรึป่าว(ค่าเท่ากันแต่ไม่ใช่ location เดียวกันก็ false)
student == godStudent //true
student === newStudent //false

//manual คือเขียน function เอง
function isEqual(obj1, obj2){
    return obj1==obj2;
}

//shallow equality คือเขียน function ที่เทียบทีละตัว (ยุ่งยากชิบหาย)
function shallowEquality(obj1, obj2){
    const key1 = Object.keys(obj1);     //สร้าง array ของ property จาก obj1
    const key2 = Object.keys(obj2);     //สร้าง array ของ property จาก obj2

    if (key1.length != key2.length) {   //เช็คว่ามี property เท่ากันรึป่าว ถ้าไม่เท่าก็ไม่ใช่ return false
        return false;
    }
    for (const key in key1) {           //loop ตามจำนวน property
        if (obj1[key] !== obj2[key]) {  //เช็ค property ที่ชื่อเดียวกันว่ามีค่าเท่ากันหรือเปล่า ถ้าไม่ก็ return false
            return false;
        }
    }
    return true;                        //return true เนื่องจากเช็คทุกตัวแล้วยังไม่ได้ return false
}

