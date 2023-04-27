//!burada liste adında, local de LISTE adında boş bir liste oluştur, listenin içi doluysa dolu listeyi getir*************************
//todo *****************
let liste = JSON.parse(localStorage.getItem("LISTE")) || [];

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");
let completed = 0;

//!Add butonuna basıldığında

listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");
  } else if (liste.includes(listeInput.value)) {
    return;
  } else {
    liste.push(listeInput.value);

    //!liste ye eleman eklenince  localStorage deki LISTE yi güncelle**************************
    //todo *****************
    localStorage.setItem("LISTE", JSON.stringify(liste));

    // console.log(liste);
    //!ekranda listeyi göster

    showListe();
    listeInput.value = "";
  }
};
// console.log(liste);
const gosterListe = () => {
  //todo *****************
    listeUl.textContent = "";
  // localstorage daki verileri ekrana baştan yazdır
  // başka türlü olmaz mesela girilenle aynısı todos ta yoksa yazdır desek, aynı şeyi girmek isteyebiliriz
  //todo *****************
  liste.forEach((todo, i, array) => {
    listeUl.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${todo}</p>
     

      <i class="fa fa-trash fa-lg"></i>
    </li>`;
  });
  //2.basma yolu
//    <p>${array[array.length - 1]}</p>;
  //todo *****************
  toplam.textContent = liste.length;

  listeInput.focus();

  //!silme
  createSilButon();
  //!check
  createCheckButon();
};

const createSilButon = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      //  console.log(liste.indexOf(
      //   a.previousElementSibling.textContent
      // ))
      //!  a.previousElementSibling=a nın önceki  kardeş elementi=p
      // console.log(
      //   a.previousElementSibling.textContent
      // )
      const silinecekIndis = liste.indexOf(
        a.previousElementSibling.textContent
      );

      liste.splice(silinecekIndis, 1);
      //!splice(değişecek index, silinecek mi-kaç tane silinecek, yerine ne gelecekse-opsiyonel)
       a.parentElement.remove();
      //!ekrandan silmezsek o an ekranda elemanlar durur, refresh yapınca localStorage den dizi geleceği için silinmiş olarak gelir, o yüzden ekrandan da silmekte fayda var
      //!listeden eleman silinince localStorage deki LISTE yi güncelle*************
      //todo *****************
      localStorage.setItem("LISTE", JSON.stringify(liste));

      //todo *****************
      toplam.textContent = liste.length;

      if (completed > 0 && a.parentElement.classList.contains("checked")) {
        completed = completed - 1;
        document.querySelector("#tamamlanan").textContent = completed;
      }
    };
  });
};

const createCheckButon = () => {
  //!1.yol
  document.querySelectorAll(".fa-check").forEach((a) => {
    a.onclick = () => {
      if (a.parentElement.classList.contains("checked")) {
        a.parentElement.classList.remove("checked");
        completed = completed - 1;
      } else {
        a.parentElement.classList.add("checked");
        completed = completed + 1;
      }
      document.querySelector("#tamamlanan").textContent = completed;
    };
  });
};

// ekran tekrar açıldığında kalıcı kaydettiğim elemanlar ekrana direk basılsın
 gosterListe();
 
