// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar = [30, 24, 55, 78, 12];

console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[1,2,3,4]

//! 2. YÖNTEM (Array Constructor)

const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

//!10 elemanlı bir Array tanımlama
const sayilar = new Array(10);

console.log(sayilar);
sayilar[4] = 256;
sayilar[9] = "Ayse";

console.log(sayilar);

console.log("**********************************");

const birth = 1979;

const isimler = [
  "Halit",
  "İrfan",
  "Emirhan",
  2023 - birth,
  "Esra",
  true,
  23,
  yaslar,
];
console.log(isimler);

isimler[5] = false;
isimler[8] = 58;

console.log(isimler);
console.log(isimler[3]);
console.log(isimler[7][2]);
console.log(isimler[isimler.length - 2][yaslar.length - 3]);

console.log(--isimler[7][2]); //elemanı 1 eksilttik
console.log(isimler[7][2]); //kalıcı eksilmiş oldu

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop();

console.log(meyveler);
console.log(meyveler.pop());

//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

console.log(meyveler.shift());
console.log(meyveler);

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("Çilek", "Kavun", "karpuz"));
console.log(meyveler);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.unshift("Ayva"));
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir
meyveler.reverse();
console.log(meyveler);

console.log(meyveler[3].split("").reverse());

// dizinin 3. string elemanını Array e çevirip reverse metodu ile ters dönmüş dizi yaptık. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz
console.log(meyveler);

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

// ["karpuz", "Kavun", "Çilek", "Armut", "Erik", "Ayva"];
meyveler.splice(2, 0, "Mango");
console.log(meyveler);

meyveler.splice(1, 1, "Ananas"); //=meyveler[1]="Ananas"
console.log(meyveler);

//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort();
console.log(meyveler);

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

number.sort();
console.log(number);

number.sort((a, b) => a - b);

console.log(number);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

//* includes*******

console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//*** */ indexOf(), lastIndexOf()*****

console.log(sayilar1.indexOf("2"));
console.log(sayilar1.indexOf(2, 3)); //5  3. indexten sonraki 2 yi bul
console.log(sayilar1.lastIndexOf(5)); //7

//********** */ Örnek
//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];
// const sayiString = prompt("lütfen bir sayı giriniz"); //"5"

// const sayiNumber = Number(sayiString); //5

// let varMi=false;

// if (sayilar1.includes(sayiString)) {
//   console.log(
//     "aradığınız sayının String hali dizide var ve index i:",
//     sayilar1.indexOf(sayiString)
//   );
//   varMi=true
// }
//  else console.log("aradığınız sayının string hali bulunamadı");
// if (sayilar1.includes(sayiNumber)) {
//   console.log(
//     "aradığınız sayı dizide var ve index i:",
// sayilar1.indexOf(sayiNumber)
//   );
//   varMi=true
// }

// else console.log("aradığınız sayının number hali bulunamadı");

// if(varMi==false){
//   console.log("aradığınız sayı bulunamadı");
// }

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(","));
console.log(sayilar1.join("A "));


// const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

//*dizinin 2. elemanını tersten string olarak yazdır.

console.log(meyveler[2].split("").reverse().join("")); //avyA


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());

//****** */ slice******

const arabalar=["bmw", "mercedes", "audi", "ferrari", "lamborgini"]

console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));
console.log(arabalar.slice());

//! diziyi kopyalamak içinde kullanılır
const arabalar2 = arabalar.slice()

console.log(arabalar2);


//***** */ concat****

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]

const birlesik=kisiler.concat(rakamlar,true, "halit","emirhan", ["irfan","yunus"], [["a","b","c"]])

console.log(birlesik);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18, 23, 35, 44, 57, 89, 15]

console.log(yas.every((a)=> a>=18));//false

//! 1 tane bile istediğim şarta uymayan varsa false döndürür

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((a)=> a>70 ));//true
console.log(yas.some((a)=> a>90 ));//false