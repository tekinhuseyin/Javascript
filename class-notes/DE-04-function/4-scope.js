// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//!global scope

let birinci=5;
let ikinci=12;
let ucuncu=123;

console.log(birinci, ikinci, ucuncu);

const scopeDeneme=function(){

birinci=8;

// yeni bir ikinci oluşturdu ve dışarıdan erişilemez hale geldi
let ikinci=45
console.log(ikinci);


  let dorduncu=1234
 
 return dorduncu
// return dorduncu => yazılır fonksiyon dışına dorduncu yandaki gibi yazarsak dönmüş olur=>  console.log(scopeDeneme())=1234

}


console.log(birinci);//8
console.log(ikinci);
//  console.log(dorduncu);
  alert(scopeDeneme())

  console.log(ucuncu);