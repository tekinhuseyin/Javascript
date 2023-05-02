//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda (her durumda) çalışacak kodları yazdırmak için kullanılır.

const veriGetir = async () => {
  // //!hatanın ne olduğunu kendi cümlemizle görebiliriz, ama try catch siz throw olursa, hata durumunda kod burada durur, alttaki kodlar çalışmaz. bu yüzden try-catch kullanmalıyız
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?");

    if (!response.ok) {
      throw new Error(`biraz hata var ${response.status}`)
      console.log("hata");;
    }

    const veri = await response.json();
    //  console.log(veri);
    ekranaBastir(veri);
  } catch (error) {
    console.log(error);
    console.log("try-catch sayesinde koda devam");
  }finally{
    console.log("başarılı başarısız her durumda çalış");
  }
};

veriGetir();

const ekranaBastir = (data) => {
  data.forEach((item) => {
    document.querySelector("section").innerHTML += `
  <h1>Name: <span class="text-danger"> ${item.show.name}</span></h1>

 <img src=${item.show.image.medium}  />

  <h3 class="fst-italic"> ${item.show.genres}</h3>

  `;
  });
};
