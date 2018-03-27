//1
/* var abc = 1;

function set() {
    console.log(abc);
    var abc = 2;
    console.log(abc);
}
set(); */

/* 
var x = 3;
(function() {
    x = 6;
    y = 6;
    var z = 3;
})();
console.log(x == y);
console.log(z); */

/* var a = 1; */
/* var b = 6;
var c = true;
var d = false;
var e = 6;
console.log(a || b || c);
console.log(d && e); */
/* function ab() {
    a = b = 2;
}
ab();
console.info(a);
console.info(b); */

function fn() {
    this.a = 0;
    this.b = function() {
        alert(this.a)
    }
}
fn.prototype = {
    b: function() {
        this.a = 20;
        alert(this.a);
    },
    c: function() {
        this.a = 30;
        alert(this.a);
    }
}
var myfn = new fn();
myfn.b();
myfn.c();