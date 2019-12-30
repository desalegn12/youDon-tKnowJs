if(Function.prototype.bind){
    Function.prototype.bind=function(othis){
        if(typeof this!=="function"){
            throw new TypeError("function.protoype.bind-what is tryiing"+
            "tobe bound is not called");
        }
    }
    var aArgs=Array.prototype.slice.call(arguments,1),
    fToBind=this,
    fNOP=function(){},
    fBound=function(){
        return fToBind.apply(
            this instanceof fNOP&&othis ?this:othis
        ),
        aArgs.concat(
            Array.prototype.slice.call(arguments)
        );
    };
    fNOP.prototype=this.prototype;
    fBound.prototype=new fNOP();
    return fBound;
};
function binding(p1,p2){
    this.val=p1+p2;
}
var bar=binding.bind(null,"p1");
var baz=new bar("p2");
console.log(baz.val);

function trick(){
    console.log(this.a);
    
}
var a=2;
trick.call(a);
