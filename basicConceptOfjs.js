function foo(a) {
    console.log(a+b);
    
}
var b=3;//the default binding rules
foo(2);
function foo2(a){
    console.log(a+c);
    var  c=a;
}
foo2(2);
function foo3(a){
    var b=a;
    return a+b;

}
var c =foo3(6);
console.log(c);
//consider the lexical analisis of the code below

//this code snppit shows the scope how it do
function foo4(a){
    var b=a*2;
    function foo5(c){
        console.log(a,b,c);//on this 2,4,12 is printted out
        
    }
    foo5(b*3);
}
foo4(2);

function top(a){
    function top2(b){
        function top3(c){
            console.log(a+b+c);
            
        }
        top3(2);
    }
    top2(9)
}
top(12);
//u do no js up and going section of the book
//let's start the up and going portion of the book

const taxRate=0.09;//const means the variable does not needs to change the
                   //latter time

var amout=99.99;//globale variable 
if(amout>10)/*block starts{
    amout=amout*taxRate;
}//block ends
console.log(amout);
//now a look about the loops
var numOfCastomer=10;
/*while(numOfCastomer>0){
    console.log(numOfCastomer);
    numOfCastomer-=1;
    
}
do{
    console.log(numOfCastomer);
    numOfCastomer-=1;

    
}while(numOfCastomer>0);
function printAmount(){
    console.log(amount);
    
}
var amount=99.999;
printAmount();

amount=amount*2;
printAmount();

const TAX_PAID=0.08;
function getAmout(amountoftax){
    amountoftax=amountoftax+(amountoftax*TAX_PAID);
    return amountoftax;
}

console.log(getAmout(900));
*/

//js is type value //rather than type language
/*
var a;
console.log(typeof(a));
a="hello world";//string
console.log(typeof(a));
a=42;//number
console.log(typeof(a));
a=true;//boolean
console.log(typeof(a));
a=null;//object
console.log(typeof(a));
a=undefined;//undefined weid bug
console.log(typeof(a));
a={b:"c"};//this is an object
console.log(typeof(a));
console.log(typeof "abc");
var obj1={
    a:"hellow wold",
    b:42,
    c:true
};//this is an object with the object value pair
//this are the properties of the object
console.log(obj1.a,obj1.b,obj1.c);
//we can get the same result when looks this
console.log(obj1["a"],obj1['a'],obj1["b"],obj1["c"]);
var d="a";
console.log(obj1[d]);
var arr=["hello world",42,true];//object only value
console.log(typeof arr);

function foo() {
    return 42;
}
var bar ="hellow world";
console.log(foo,foo(),foo.bar);
console.log(typeof foo,typeof foo(),typeof foo.bar);

//now let's go type conversion(coercion)
var a="42";
//this shows the explicit conversion
var b=Number(a);
console.log(typeof b,b);
var c =a+1;//this is doing string concatination
var d=a*1;
console.log(typeof c,c);
console.log(typeof d,d)

//now seeing the explicite conversion
var fourtwo=42;
var twofour="42";
console.log(fourtwo==twofour,fourtwo);
console.log(fourtwo===twofour,fourtwo);
var a=[1,2,3];
var b=[1,2,3];
var c="1,2,3";
console.log(a==b,a==c,b==c,a===b,a,b);

var obj2={
    s:"name",
    func:function(){
        return 50;
    },
    func2:function(){
        return 40;
    }
};


console.log(obj2.func(),obj2.func2());

//NAN comparition
var foo="foo";
var num =42;
//then the comparation between the 
//two is either NAN==42
//or "42"=="foo" //both case is not correct
//false is printed out

var f=2;
footwo();
function footwo(){
    f=3;
    console.log(f);
    
    var f;
   //console.log(f);
   
}

console.log(f);


function lels(){
    var a=1;
    if(a>=1){
        let bbb=2;
        while(bbb<5){
            let c=bbb*2;
            bbb++;
            console.log(a+c);
            
        }
    }
    
    
}
lels();
//most of the time when we considering the var 
//the scope shown respect to the function
//where as when we take let the variable scope showen
//only withen any indiidual block{...}
function switchstatment(value){
    switch(value){
        case 2:
            console.log("oh forget break");
            break
        case 3:
            console.log(3);
            break;
        default:
            console.log("default");
            break;
            
            
            
    }
}
switchstatment(2);

var mno=10;
var cheack=(mno>12)? "hello":"world";
console.log(cheack);
var a=5;
   //generally the strict mode used to fix what is
   //wrong on the code snipt
//"use strict" globale strict mode
function strictmode(){
    "use strict";//local strict
    console.log(a);
    
}

strictmode();
//now we see an immidatlly invoked function
(function x(){
    console.log("hello an immidatlly inoked function");
    
})();
(function(){
    console.log("this is also an immidatlly inok function ananomouse");
    
})()/*this pair of parantesis is calling the immidate celling function */;
var globalVar=42;
function normalFunction(){

   globalVar=10;
  console.log(globalVar);
  
}
normalFunction();
console.log(globalVar);
//show the difference in the immidte calling function
(function(){
    globalVar=5
   console.log(globalVar);
   
})();
console.log(globalVar);
//cluser

//technically the closure is reference and remember

function adder(x){
    function add(y){
        return y+x;
    };
    return add;
}
var plus2=adder(2);
console.log(plus2(9));
//how the user function access both the outer and the inner detail functions

function user(){
    var username,password;
    function dologin(usr,pass){
        username=usr;
        password=pass;
        console.log(username,password);
        
    }
    var publicApi={
        login:dologin
    }
    return publicApi;
}
var users=user();
users.login("desalegn","mypassword");

function binnding(one,two,three){
    return this.that+one+two+three;
}

function applying(func, obj){
    return function(){
        return func.apply(obj,arguments)
    }
}
var obj3={
    that:10
};
var bindding=applying(binnding,obj3);
console.log(bindding(1,2,3));


function howthis(){
    console.log(this.bar1);
    
}
var bar1="default global";
var obj4={
    bar1:"inside obj4",
    howthisa:howthis
};
var obj5={
    bar1:"inside obj5"
};
howthis();//the difault this reference is called
obj4.howthisa();
howthis.call(obj5);
var createObject={
    a:42
};
var bar =Object.create(createObject);
bar.b="hello world";
console.log(bar.b);
console.log(bar.a);
function polyfill(){
    if(!Number.isNaN){
        Number.isNaN=function isNaN(x){
            return x!==x;
        }
    }
}


polyfill();
//now default parametr for the given function
function defaultValue(a=2){
   console.log(a);
   
}
defaultValue();
defaultValue(52);
function defualtAregument(){
    var a=arguments[0]!==(void 0)/*undefind*/?arguments[0]:2;
   
    console.log(a);
    
}
defualtAregument();
defualtAregument(9);

//above this we saw the basic consept of javascript
//now let's go to the ydnjs concept