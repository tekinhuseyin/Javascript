//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================

//*----------ORNEK-----------

const prices1 = [100, 250, 50, 90];

prices1.forEach((a) => console.log(a));

let toplam = 0;

let terminal = prices1.forEach((a) => console.log((toplam += a)));
console.log(terminal); //undefined

//*********************************ORNEK******* */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.

const prices = [100, 250, 50, 90];
let toplam1 = 0;

prices.forEach((p, i, prices) => {
  toplam1 += p;
  console.log(`${i}. toplam ${toplam1}`);

  prices[i] = prices[i] * 2;
  //*bu şekilde diziyi kalıcı değiştirdik
});
console.log(prices);

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = [
  "kubilay",
  "irfan",
  "fatih",
  "özlem",
  "nihal",
  "yunus",
  "emirhan",
  "halit",
  "esra",
  "hüseyin",
];

const yeniIsim = names.map((isim) => isim.toUpperCase());
console.log(yeniIsim);

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

// const fiyatlar = [100, 250, 50, 90];

// fiyatlar.map((p, i, array) => {
//   if (p < 250) {
//     array[i] = array[i] * 1.5;
//   } else array[i] = array[i] * 1.2;
// });

// console.log(fiyatlar);


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const tlPrices=[100, 150, 200, 80, 50 ]
const dolar=19.20
const euro=21.20

//! toFixed()= kullandığınız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız)
const dolarPrices= tlPrices.map((a)=>+(a/dolar).toFixed(2))

console.log(dolarPrices);

const euroPrices=tlPrices.map((i)=>Number((i/euro).toFixed(2)))
console.log(euroPrices);

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

// const prices = [200, 500, 100, 180];

const yeniDizi= prices.filter((a)=> a < 200)

console.log(yeniDizi);

//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 tl ve 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

// const fiyatlar = [100, 250, 50, 90];

// fiyatlar.map((p, i, array) => {
//   if (p < 250) {
//     array[i] = array[i] * 1.5;
//   } else array[i] = array[i] * 1.2;
// });

// console.log(fiyatlar);

const tlFiyatlar = [100, 150, 100, 50, 80];

const degerler= tlFiyatlar.map((d) => {
  if (d > 100) {
    d = d*1.1
  } else {
    d = d * 1.15;
  }
  return d
});

console.log(degerler);


const bir= tlFiyatlar.filter((a)=>a > 100 ).map((c)=>c*1.1)
const iki= tlFiyatlar.filter((a)=>a<=100).map((a)=>a*1.15)

console.log(bir.concat(iki));


//*-------------- ÖRNEK -------------------
//*people dizisinde ismin ilk harfine göre arama yaparak ilgili isimlerin ilk 3 harfini yazdıran bir fonksiyon yazınız.

const people = [
  "kubilay",
  "irfan",
  "fatih",
  "özlem",
  "nihal",
  "yunus",
  "emirhan",
  "halit",
  "esra",
  "hüseyin",
];

const harfBul=(h)=>{
people.filter((isim)=>isim.startsWith(h)).map((isim)=>isim.slice(0,3)).forEach((a)=>console.log(a))

}

harfBul("e")
harfBul("h")
console.log(people);

//* ======================================================
//*                      REDUCE
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)


const salaries = [3000, 5000, 4000, 6000, 7500];

const sonuc= salaries.reduce((toplam,diziEleman)=>toplam+diziEleman,0)
console.log(sonuc);

//! forEach metodu dizilerde kullanılabilir, reduce tek bir eleman döndürdüğü için, burada forEach kullanamayız

console.log(salaries.reduce((carpim, diziEleman) => carpim * diziEleman, 1));


//************* */ ORNEKLER***************
//? ornek1
 const text = "Clarusway Online Career IT Training School";

// ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüttük
 const array=text.split(" ")
//  console.log(array);

array.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a));



const arr2=array.map((a)=>a.toUpperCase())
console.log(arr2);

//!yukarıda array e döndürdüğümüz string cümledeki, T ile başlayan kelimelerin ilk harfini küçült, gerisini normal yazdır
array.filter((item)=>item.startsWith("T")).map((a)=>a[0].toLowerCase()+a.slice(1)).forEach((a)=>console.log(a))

//? ornek2. n harfiyle biten isimleri tersten yazdırıp yeni bir diziye atın

const yeni=people.filter((a)=>a.endsWith("n")).map((a)=>a.split("").reverse().join(""))
console.log(yeni);