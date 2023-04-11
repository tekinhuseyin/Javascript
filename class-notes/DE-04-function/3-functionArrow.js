// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */


 //* Örnek2:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
console.log("===========================");
console.log("     JAVASCRİPT DERSİ      ");
console.log("===========================");

}

 menu();

 //****** */  Ornek3 yas hesaplama

 // new Date()= bize şu anın tüm tarihini verir. Mesela .getFullYear() ile istedigimiz bir yili cagirabiliriz. ( istersek dakika saat gün ay vs)

const yasHesapla=(yil)=> new Date().getFullYear() -yil

 
  console.log( yasHesapla(1979))

//   console.log(new Date().getHours());


//*** */ Ornek4  silindirin hacmini hesapla

// toFixed(a)=virgüllü bir sayıda, virgülden sonra istediğimiz adette (a) rakam görmemizi sağlar

const hacimHesapla=(r,h)=> Math.PI*r*r*h;


console.log(hacimHesapla(4,5));
console.log(hacimHesapla(4,5).toFixed(3));



//* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciNumber = (n) => {
  let fiboSol = 1;
  let fiboSag = 1;
  let yeniFibo = 0;
  let toplam = 2;

  for (let i = 1; i < n - 1; i++) {
    yeniFibo = fiboSol + fiboSag;

    fiboSol = fiboSag;

    fiboSag = yeniFibo;
    toplam += fiboSag;
  }

  return ` fiboSag: ${fiboSag} toplam: ${toplam}`;
};

alert(fibonacciNumber(8));











