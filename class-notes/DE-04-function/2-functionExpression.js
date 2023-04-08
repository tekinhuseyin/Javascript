// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//önce fonksiyon oluşturulur (şart)

const tekCift = function (sayi) {
  return sayi % 2 == 0 ? "cifttir " : "tektir";
};

alert(tekCift(15));


//* Örnek2:en büyük sayıyı bul
//**********************************************************/

const buyukBul=function(x,y,z){
let enBuyuk;

    if(x>y && x>z){
        enBuyuk=x
    }else if(y>x && y>z){
        enBuyuk=y
    }else {
        enBuyuk=z
    }

return enBuyuk


}

alert(buyukBul(3,5,9))