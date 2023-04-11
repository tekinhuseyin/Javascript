//? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================
//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.
//! sayma sayilarinin ilk 6 terim toplamini bulunuz
let toplam=0;
let sayi=6;
for(let i=1; i<=6; i++){
    toplam=toplam+i
}
console.log("ilk alti terim toplami:", toplam);
//******************************* */
//* Ayni soruyu recursive ile cözelim
const toplamlar = (n) => {
    if (n < 1) {
      return n;
    } else return toplamlar(n - 1) + n;
  };
  alert(toplamlar(12));