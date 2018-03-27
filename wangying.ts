class Stu{
    full:string;
    constructor(public abc,public haha){
        this.full=abc+""+haha;
    }
}

interface obj{
    abc:string,
    haha:number
}

function wehg(obj){
    console.log(obj.abc+obj.haha);
}

let tt= new Stu("haha",123);
console.log(tt);
wehg(tt);




