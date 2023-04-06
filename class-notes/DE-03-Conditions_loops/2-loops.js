// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


//? ornek ekrana 10 kere merhaba yazdırın

for (let index = 1; index <= 10; index++) {
    console.log( index, "MERHABA");
    
}

//? 1 den N e kadar olan sayıların toplamı

const N = +prompt("lütfen N i giriniz");

let toplam=0
for (let i = 1; i <= N ; i++) {
  
    // toplam=toplam+i
    toplam+=i

    
}
console.log(toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

const sayi=+prompt("asallık kontrolü için bir sayı giriniz")
let asal=true;

for(let i = 2 ; i < sayi; i++){

 if(sayi % i ==0 ) {
    asal=false
 }


}
console.log(asal ? " asaldır" : "asal değildir");