//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyon verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginde, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan, bekliyor
//* fulfilled:islemin basariyla tamamlandigini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise le degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("promise başlıyor");
const person = { name: "Ali", surname: "Gel" };

new Promise((resolve, reject) => {
  resolve(person);
  reject(new Error("promise başarısız"));
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. su kaynayana kadar bekleyin -> kettle -> work or failed
//* 2. çay ekle --> çay var ya da yok
//* 3. demlenmesini bekle

//!ilk then de sıkıntı varsa direk catch e düşer
const brewTea = () => {
  boil()
    .then((status1) => {
      console.log(status1);
      return addTea();
    })
    .then((status2) => {
      console.log(status2);

      return "Çay hazır. Afiyet olsun";
    }).catch((err) => console.log(err));
};
const boil = () => {
  return new Promise((resolve, reject) => {
    const boiled = Math.floor(Math.random() * 5); //!0 tutarsa false
    if (boiled) {
      resolve("Su Kaynadı");
    } else {
      reject(new Error("Kettle Başarısız"));
    }
  });
};

const addTea = () => {
  return new Promise((resolve, reject) => {
    const teaAvalaible = Math.floor(Math.random() * 3);
    if (teaAvalaible) {
      resolve("Çay Eklendi");
    } else {
      reject(new Error("Çay kalmamış"));
    }
  });
};

 brewTea();

 //?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//*daha tercih edilenler
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)