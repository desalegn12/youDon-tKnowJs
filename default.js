function foo(){
    console.log(this.a);
    //default binding the global variable is eligible to call inside

}
a=2
foo();
function bar(){
   // "use strict"//this maks the variable not to be globale
    console.log(this.b);
    
}
b=4;
bar();
//now we show how the iplicit dinding
function foot(){
    console.log(this.walk);
    
}
obj={
    walk:"am walking",
    foot:foot
};
obj1={
    walk:"am stop walking",
    obj:obj,
  
}
obj1.obj.foot();
//obj1.foot();//we can not call this b/c foot don't know walk
function losecallsit(){
    console.log(this.l);

    
}
obj2={
    l:2,
    losecallsit:losecallsit
};
//the point is what is the difference between the two?
obj2.losecallsit();
var bar=obj2.losecallsit;
bar();//the quesion is what makes this undifind
l="am globale var that makes inpllicit bind lose";
bar();
//now we have to show the explicit binding metods
function explicit(){
    console.log(this.ex);
    
}
obj3={
    ex:"explicit"
};
var bar1=function(){
    explicit.call(obj3);
};
bar1();
function timeout(fu,time){
    fu();
}
timeout(bar1,100);
explicit.call(obj3);
//bar1.call(window);

//explicit bind with function.applay
function applay(something){
    console.log(this.applays,something);
    return this.applays+something;

    
}
var obj4={
    applays:2
}
var bar2=function(){
    return applay.apply(obj4,arguments);
};
//the argument refers to the parametr something
var b=bar2(3);//the real parametr of the function
console.log(b);
// anather ways of expressing the above code is
function applayy(something){
    console.log(this.applay,something);
    return this.applay+something;
    //the return function does not 
    //seen unless the log will be called
    
}
function bind(fn,obj5){
    return function(){
        return fn.apply(obj5,arguments);
    }

}
var obj5={
  applay:2
};
var bar3=bind(applayy,obj5);
var bb=bar3(3);
console.log(bb);
 function howapplywork(something,fewthing,nothing){
     console.log(this.ap,something,fewthing,nothing);
     return this.ap+something+fewthing+nothing;
 }
 function binded(fun,obj5){
     return function(){
         return fun.apply(obj5,arguments);
     }
 }
 var obj5={
     ap:4
 }
 var bar4=binded(howapplywork,obj5);
 var b3=bar4(2,3,5);
 console.log(b3);
 //now we express the above the es5 built in function
 //function.prototype.bind
 //we call the binded fuction is the protytype of
 //the function
 function es5(something){
     console.log(this.app,something);
     return this.app+something;

     
 }
 var obj5={
     app:5
 };
 var bar5=es5.bind(obj5);
 var b4=bar5(3);
 console.log(b4);
 //now we see the context(api) forms of binding
 function aapi(something){
     console.log(this.id,something);
     
     
 }
 var obj6={
     id:"awesome"
 };
 [1,2,3].forEach(aapi,obj6);
 //now we see the constructore ways of binding
 //the final method of binding
 function final(a){
    this.a=a;
 }
 var bar =new final(9);
 console.log(bar);
 
 console.log(bar.a);
 // now we see the precidence of the explicit and 
 //implicit binding 
 //explicit binding is proceded over the implicit one
 function presedence(){
     console.log(this.presedencce);
     
 }
var  obj7={
     presedencce:2,
     presedence:presedence

 };
 var obj8={
     presedencce:3,
     presedence:presedence
 }
 //u see the explicit is proceded over the implicit one

 obj7.presedence.call(obj8);//3
 obj8.presedence.call(obj7);//2
 obj7.presedence();
 obj8.presedence();
 //now we show how the new is more precident 
 //than the implicit binding and less precidence 
 //than the explicit binding
 function precidenc(something){
     this.something=something;
 }
 var obj9={
     precidenc:precidenc
 };
 var obj10={

 };
 obj9.precidenc(2);
 console.log(obj9.something);//2
 obj9.precidenc.call(obj10,3);
 console.log(obj10.something);//3
 var bar7=new obj9.precidenc(4);
 console.log(obj9.something);//2
 console.log(bar7.something);//4//if new is not procided
 //then the 3 will be printed out
 
 function cheack(something){
     this.something=something;
 }
var obj11={

};
var bar8=cheack.bind(obj11);
bar8(8);
console.log(obj11.something);

var baz =new bar8(9);
console.log(obj11.something);
console.log(baz.something);
//after this we will show how to functon.prototype.bind
//in the ES5
//now let's go



 
 