// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//! 1- Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1="clarusway"
const str2="hello"
const str3="all the world"
console.log(str2+str3, typeof(str2+str3));
console.log(str2[str2.length-1]);

//! 2- String constructor ile tanımlanan String non-primitive (ilkel olmayan) dir 
 const str4=  new String("yeni bir String")

 console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1="hello "
const s2="world"

console.log(s1.concat(s2));
console.log(s1);
const s3 = s1.concat(s2);
console.log(s3);

//! orjinal değerler değişmez, assigning ile kalıcı değiştirebilirsiniz

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName="Ashley Miller"

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const esitMi=(str1,str2)=>str1==str2.toLocaleUpperCase("tr") ? "eşittir" :"eşit değildir"


console.log(esitMi("İSMET","ismet"));

// *=========================================================
// *   charAt()
// *=========================================================

const s4="primitive \n veri tiplerinin \n property ya \n da methodu olmaz."
console.log(s4);

console.log(s4.charAt(5));//t
console.log(s4.charAt(9));//" "
console.log(s4.charAt());//ilk karakteri döndürür
console.log(s4.charAt(s4.length-1));//.

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime="to be or not to be, that is The questions."

console.log(kelime.includes("TO BE"));//false
console.log(kelime.includes("to be"));//true
console.log(kelime.includes("quest"));//true
console.log(kelime.includes(" "));//true
console.log(kelime.includes("to be",14));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

// *=========================================================
// *   indexOf()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime1 = "to be or not to be, that is The questions.";

console.log(kelime1.indexOf("be"));
console.log(kelime1.lastIndexOf("be"));
console.log(kelime1.indexOf("the"));// olmayan karakter için -1 döndürür
console.log(kelime1.indexOf("TO BE"));// -1
console.log(kelime1.indexOf(" "));
console.log(kelime1.indexOf("be",4));//16

console.log(kelime1.indexOf("be",kelime1.indexOf("be")+1));


// *=========================================================
// *   search()  
// *=========================================================
const kelime2 = "!to be or not to be, 5 that is The questions.";

//! REGEX-regular expression

console.log(kelime2.search(/[A-Z]/));//28
// cümlenin içindeki büyük harfi bulup küçülttük
console.log(kelime2.charAt(kelime2.search(/[A-Z]/)).toLowerCase());

console.log(kelime2.search(/[a-z]/));//1
console.log(kelime2.search(/[0-9]/));//
console.log(kelime2.search(/[.]/));//44
console.log(kelime2.indexOf("."));//44

console.log(kelime2.search(/[0-9a-zA-Z]/));//1 rakam yada küçük yada büyük harf varsa index ini döndür

console.log(kelime2.search(/[^a-z]/));//0

//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const kelime3="Salına salına  sinsice olurum sana!"

console.log(kelime3.startsWith("sa"));//false
console.log(kelime3.startsWith("Sa"));//true
console.log(kelime3.startsWith("salına",7));//true 7. karakterden başla 7 dahil
console.log(kelime3.endsWith("!"));//true
console.log(kelime3.endsWith("salına",13));//true 13. karaktere kadar say 13 dahil değil

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku="Oku Johny gibi saf olma saf olma saf olma"

oku=oku.replace("saf olma","basarılı ol" )
console.log(oku);

console.log(oku.replace(/SAF/i,"fakir"));

//    /SAF/i büyük küçük harfe duyarsız ol incase-sensitive

console.log(oku.replace(/Saf olma/gi, "zengin ol"));
//!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu


//*replaceAll()
let degistir = "Oku Johny gibi saf olma saf olma SAF olma";

console.log(degistir.replaceAll("saf olma", "akıllı ol"));


//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(10));//BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(17,21));//DAYI 21 dahil değil
console.log(veysel.substring(17,21));//DAYI 21 dahil değil

console.log(veysel.slice(-10)); // UNDUZ GECE saymaya sondan ve -1 ile başlanır 

console.log(veysel.slice(-11,-6));//GUNDU
console.log(veysel.slice(16,-6));//LDAYIM YÜRÜYORUM GUNDU

//!substring metodunda - index çalışmaz
console.log(veysel.substring(-10));
console.log(veysel.substring(veysel.length-3));//son 3 karakteri al

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------


const tarkan="Gel gündüzle gece olalım"

console.log(tarkan.split());//1 elemanlı array e çevirir
console.log(tarkan.split(" "));//boşluklardan ayır
console.log(tarkan.split(""));//hiçliklerden ayır
console.log(tarkan.split("e"));//e ler iptal, yerine virgül ve boşluk koyar
console.log(tarkan.split("e",3));// dizinin 3 elemanını al
console.log(tarkan.split("",3));
console.log(tarkan);


//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------

const ramazan="     Hos geldin ya Sehr i Ramazan      "
console.log(ramazan);
console.log(ramazan.length);

console.log(ramazan.trim());
console.log(ramazan.trim().length);

