// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//!sayma sayılarının ilk 6 terim toplamını bulunuz

let toplam = 0;
let sayi = 6;
for (let i = 1; i <= sayi; i++) {
  toplam = toplam + i;
}

console.log("ilk 6 terim toplamı:", toplam);

//********************************** */

//* aynı soruyu recursive ile çözelim

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else return toplamlar(n - 1) + n;
};

// alert(toplamlar(12));


//* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//!fibonacci dizisindeki  n. terimi  bulma fonksiyonu


const fibo=(n)=>{

if(n<2){
    return n
}else


return  fibo(n-1)+fibo(n-2)



}

console.log(fibo(6));