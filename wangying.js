var Stu = /** @class */ (function () {
    function Stu(abc, haha) {
        this.abc = abc;
        this.haha = haha;
        this.full = abc + "" + haha;
    }
    return Stu;
}());
function wehg(obj) {
    console.log(obj.abc + obj.haha);
}
var tt = new Stu("haha", 123);
console.log(tt);
wehg(tt);
