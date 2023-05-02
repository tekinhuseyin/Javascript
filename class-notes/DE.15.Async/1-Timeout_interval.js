//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.


//*Senkron Programlama
//****************************************** */

const bekle=()=>{
const start=new Date().getTime()
while(new Date().getTime()<start+ms){

}

}

console.log("hello");

console.time("timer1") //kronometreyi baslat
bekle(3000)

console.timeEnd("timer") //kronometreyi durdur


//*Asenkron (setTimeout) 1 seferlik
//******************************** */

setTimeout(()=>{

    console.log("selamun aleyküm");

},2000)
console.log("aleyküm selam");

setTimeout(() => {
  console.log("naber napıyorsun");
}, 3000);

//!Aleyküm Selam-Selamun Aleyküm- Naber napıyorsun çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking

console.log("sayaç başlıyor");
let sayac=0

const interval1= setInterval(()=>{

    console.log(++sayac);

    if(sayac==6){
        clearInterval(interval1)
    }

},1000)

console.log("sayaç durduruldu");



// //?callback hell

setTimeout(() => {
  console.log("ayse:s.a. ahmet");
  setTimeout(() => {
    console.log("ahmet:a.s. ayse nasılsın");
    setTimeout(() => {
      console.log("ayse:iyiyim sağol");
    }, 1000);
  }, 1000);
}, 1000);

