// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/
//?Fonksiyonun tanımlanması

// yazdir()

function yazdir(){

    console.log("e daha daha nasılsınız");
}
 yazdir() // call veya invoke ( fonksiyonu çağırmak)

//* */ Ornek2************PARAMETRELİ FONKSİYON********************
function adYazdir(ad, ikinciAd, soyad){

    console.log(soyad, ad,ikinciAd );
}

adYazdir("kubilay", "ozlem","NİHAL")

//* Ornek3********* parametreli, dönüş değerli****************

function yasHesapla(ad,tarih){

    console.log(`benim adım ${ad} ve ben  ${2023-tarih} yasındayım` );
return 2023-tarih
}

const ipek=yasHesapla("ipek", 1979);   
const yunus=yasHesapla("yunus",1990)
const fatih=yasHesapla("fatih",2000)

console.log(ipek,yunus, fatih);


console.log((ipek+yunus+fatih)/3);

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

//tek çift sorgulaması

 console.log(tekCiftSayi(5));  
 console.log(tekCiftSayi(50));  

function tekCiftSayi(sayi){
return  sayi%2==0 ? "cifttir" : "tektir"

}



