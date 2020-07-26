var a = 10;
var b = 5;

function pembagianbulat(a,b){
    var c=a/b;
    if(c>=0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}

console.log(`${a}/${b}=${pembagianbulat(a,b)}`);