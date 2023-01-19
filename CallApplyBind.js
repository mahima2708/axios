//call--------------------
var obj={key:5};

var multiplication= function(a){
    return this.key*a;
};
console.log(multiplication.call(obj,8));

//apply--------------------
var arr=[3,6,8];
var addition= function(a,b,c){
    return this.key+a+b+c;
};
console.log(addition.apply(obj,arr));
 //bind--------------------

var newObj = multiplication.bind(obj);
console.log(newObj(90));

//newobj student----------------
var student={age:20}
var prints= function(){
    return this.age;
};
var newStudent = prints.bind(student);
console.log(newStudent());
