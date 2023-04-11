// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");
//! global scope
// fonksiyonlar disarda yazilan degisikliklere erisebilir. if ve forlarda icerdekine disarda ulasmak icin disariya bir degisken tanimak gerekiyor ama icerde yeni bir degisken tanimlarsak ona disardan erisemiyoruz fakat  fonksiyonda returnle ulasabiliyoruz.
let birinci=5;
let ikinci=12;
let ücüncü=123;
console.log(birinci, ikinci, ücüncü);
const scopeDeneme=function() {
birinci=8;
let ikinci=45
console.log(ikinci);
let dorduncu=1234
// return dorduncu yazilir fonsiyon disina da console.log(scopeDeneme); boylece dorduncu dönmüs olur
}
scopeDeneme()
console.log(birinci);
console.log(ikinci);
console.log(dorduncu);