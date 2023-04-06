// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk=250;
const cola=20;
const peynir=200;

let toplam=sucuk+cola+peynir;
console.log(toplam);

//! bir arttır

toplam++;
//toplam=toplam+1
console.log(toplam);

//! 10 arttır

toplam+=10
// toplam=toplam+10
console.log(toplam);

//? + operatörü String Concatination işlemi de yapar.

const ad="esra"
const soyad="fatih"

console.log("adım ve soyadım:" + ad+ " "+ soyad);
console.log(`adım ve soyadım: ${ad} ${soyad}`);

//*bir sayı ve string toplanırsa alttaki gibi concatination yapar
const s1=5;
const s2="7";

console.log(s1+s2); //57
//* çıkarma işleminde verilerden biri number ise diğeri tırnaklı number olsa bile çıkarma yapar
console.log(s1-s2); //-2

const s3="iki"
console.log(s1-s3); //NaN not a number


const dogumTarihi=1979;

const name1="Ashley";

console.log(name1 + " " + (2023-dogumTarihi) + " " +"yasındadır");

//! template literals (backticks)

console.log(`${name1} ${2023-dogumTarihi} yasındadır`);


//*ARTTIRMA AZALTMA

let a =5;

 console.log("ilk", a++);
console.log("ikinci", a);
let b=a++;

console.log(a);//7
console.log(b);//6

console.log("***********************");

let c=10;

console.log(++c);//11
console.log(c);

let e=33;

console.log(--e);//32
console.log(e--);//32
console.log(e);//31


//! e yi 5 arttır

e+=5;
console.log(e);//36

//!
// e=e*10

e*=10
console.log(e);//e*10=360


//? ÇARPMA VE ÜS ALMA

const pi=3.14;
const r=3;

const alan=pi*r**2
console.log(alan);

const cevre=2*pi*r
console.log(cevre);
console.log(Math.round(cevre));

//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

const ab=-1.3
console.log(Math.trunc(ab));
console.log(Math.floor(ab));


//********* */ MOD ALMA***********

const number=456;

const birler=number%10
console.log(birler);

const onlar=Math.trunc(number/10)%10
console.log(onlar);

const yüzler=Math.floor(number/100)

console.log(yüzler);


// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1=4;

console.log(sayi1==4);//true
console.log(sayi1===4);//true
console.log(sayi1=="4");//true
console.log(sayi1==="4");//false

console.log(sayi1!=4);//false
console.log(sayi1!="4");//false

console.log(sayi1>4);
console.log(sayi1<=4);

// * =======================================================
// *                 TİP DÖNÜŞÜMLERİ
// * =======================================================

 const para= Number("1000") + Number("900");
 console.log(para);

 console.log(Number(""));//0
 console.log(Number(null));//0
 console.log(Number(true));//1

 // * =======================================================
// *                MANTIKSAL OPERATORLER
// * =======================================================

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false

const v1=false || 0 || 12.6 || true || false || null
console.log(v1);

const v2= false || 0 || null || undefined || NaN
console.log(v2);

const v3= 5 && true && true && 0 && ""
console.log(Boolean(v3), v3);

const v4=6 && true && 12.5 && 7 
console.log(v4);

console.log(!v4);//false
console.log(!v2);//true




 
console.log(Number("0x11")); // 17 x=hexa=16





console.log(Number("0b101")); // 5 b=binary 2lik taban






console.log(Number("0o11")); // 9 o=octal=8







console.log(Number("sayi")); //NAN


 

