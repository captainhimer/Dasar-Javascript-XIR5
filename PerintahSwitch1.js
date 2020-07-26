var ruang = 13;
var kelas;

switch(ruang){
    case 1 :
    case 2 : 
    case 3 :
    case 4 :
    case 5 :
    case 6 : 
    case 7 :
    case 8 : kelas = "Rekayasa Perangkat Lunak" ; break;
    case 9 :
    case 10:
    case 11:
    case 12:
    case 13:
    case 14: kelas = "Teknik Komputer Jaringa" ; break;
    default:{
        console.log(`tidak termasuk kelas 1`)
    }
}

console.log(`kelas ${kelas} adalah Ruang ${ruang}`);