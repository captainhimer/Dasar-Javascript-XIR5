// try{
//     //perintah yang mungkin dapat menimbulkan eksepsi
// }catch(eksepsi){
//     //perintah untuk penanganan eksepsi
// }

//kelas ekspresi
class DivisionByZeroError extends Error{
    constructor(msg){
        super(msg);
        this.name=this.constructor.name;
        this.message=msg;
    }
    getMessage(){
        return this.message;
    }
}

let a = 10
let b = 15

try{
    if(b==0){
        throw new DivisionByZeroError(
            'Nilai B tidak boleh 0'
        );
    }
    let c=a/b;
    console.log(`${a}/${b}=${c}`);
}catch(e){
    console.log(e.getMessage());
}