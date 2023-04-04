// * ========================================

// * ARITMATIK OPERATÖRLER

// * =========================================

const sucuk=250;
const cola=20;
const peynir=200;

let toplam=sucuk+cola+peynir;

console.log(toplam);

//! bir arttir

toplam++;
// toplam=toplam+1
console.log(toplam);

//! 10 arttir

toplam+=10
// toplam=toplam+10
console.log(toplam);

//? + operatorü String Concatination islemi de yapar

const ad="esra"
const soyad="fatih"

console.log("adim ve soyadim:" + ad+ " "+ soyad);
console.log(`adim ve soyadim: ${ad} ${soyad}`);

//*bir sayı ve string toplanırsa alttaki gibi concatination yapar
const s1=5;
const s2="7";

console.log(s1+s2); //57
//* çıkarma işleminde verilerden biri number ise diğeri tırnaklı number olsa bile çıkarma yapar
console.log(s1-s2); //-2

const s3="iki"
console.log(s1-s3);  // NaN not a number


const dogumTarihi=1979;

const name1="Ashley";

console.log(name1 + " " + (2023-dogumTarihi) + " " + "yasindasir");

//! template literals backticks

console.log(`${name1} ${2023-dogumTarihi} yasindadir`);

//* ARTTIRMA AZALTMA

let a= 5 

console.log("ilk", a++);
console.log("ikinci", a);
let b=a++;

console.log(a); // 7
console.log(b); // 6

console.log("********************************");

let c=10;

console.log(++c);
console.log(c);

let e=33;

console.log(--e); // 32

console.log(e--); // 32

console.log(e); // 31


//! e yi 5 artttir

e+=5;
console.log(e);  // 36

// e=e*10

e*=10
console.log(e); // e*10=360

//? CARPMA VE US ALMA

const pi=3.14;
const r=3;

const alan=pi*r**2
console.log(alan);

const cevre=2*pi*r
console.log(cevre);
console.log(Math.floor(cevre));
console.log(Math.round(cevre));


//? Bazi fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


const ab=-1.3
console.log(Math.trunc(ab));
console.log(Math.floor(ab));



//******************** MOD ALMA *********************

const number=456;

const birler=number%10
console.log(birler);

const onlar=Math.trunc(number/10)%10
console.log(onlar);

const yüzler=Math.floor(number/100);

console.log(yüzler);

