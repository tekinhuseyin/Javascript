//? pc ye 1-20 arasında sayı tutturduk.
let rastgeleSayı = Math.ceil(Math.random() * 20);

console.log(rastgeleSayı);

let mesaj = document.querySelector(".msg");

let skor = 10;
//skor u  index.html deki skor u buraya çekerekte yapabiliriz ama çok kullanacağımız için bu daha tercih edilen yol
let enYuksekSkor = 0;

//?her check butonuna basılınca yapılacaklar

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //?tahmin girilmeden check e basıldıysa
  if (!tahmin) {
    mesaj.textContent = "Lütfen bir tahmin giriniz";

    //?tahmin doğruysa
  }else if (tahmin == rastgeleSayı) {
    mesaj.textContent = "Tebrikler Bildiniz 🎉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayı;



    //? topScore kontrolü yap
    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }




    //?tahmin yanlışsa
  } else {
    //?skor 1 den büyük olduğu sürece tahmin hakkım var
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayı
        ? (mesaj.textContent = "Arttır 📈")
        : (mesaj.textContent = "Azalt📉");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz";
       document.querySelector(".score").textContent = 0;
 document.querySelector("body").style.backgroundColor="red"

    }
  }
});

//?Again butonuna basılınca ayarlar başlangıç değerine kurulsun arka ekran #2d3436 olsun

document.querySelector(".again").onclick=()=>{
 document.querySelector("body").style.backgroundColor = "#2d3436";
 rastgeleSayı= Math.ceil(Math.random() * 20);
console.log(rastgeleSayı);
 skor=10;
document.querySelector(".score").textContent = skor;

document.querySelector(".number").textContent="?"

document.querySelector(".guess").value=""

 mesaj.textContent="Oyun yeni oyuncu için başlıyor"
}