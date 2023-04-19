//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================


//*example1 (buton style)

 const buton= document.getElementById("btn")
  
buton.style.width="200px";
buton.style.height="80px";
buton.style.fontSize="40px"
buton.style.color="yellow";
buton.style.backgroundColor="red"

//*example2 (paragraf style)

const paragraf=  document.getElementById("par")

paragraf.style.backgroundColor="gray"
paragraf.style.color="orange"
paragraf.style.fontSize="50px"
paragraf.style.padding="5px"

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

//*example3 (img style)

const resim= document.getElementsByTagName("img")
console.log(resim);//HTMLCollection

resim[0].style.width="300px"
resim[1].style.border="5px solid red"

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const baslik= document.getElementsByClassName("H1")

console.log(baslik);//HTMLCollection

baslik[0].style.color="red"
baslik[1].style.textAlign="center"


//*array i değiştirmeyen metodları kullanabilirsiniz

for(let i=0; i < baslik.length; i++){

    baslik[i].style.color="purple";
    baslik[i].style.fontSize="50px"
}

 baslik[0].innerHTML = "<a href= 'https://www.clarusway.com'>DOM ÇOK KOLAY</a>";
//*  DOM SELECTOR yazan h1 etiketini, DOM ÇOK KOLAY yazan a etiketiyle değiştirdim
//  baslik[1].innerHTML="NAPIYORSUN"
baslik[1].textContent="İYİMİSİN"
//* sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, içeriği de değiştirebilir

//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent="DOM MANİPULATİON 💜"

document.querySelector("#badi").style.backgroundImage="linear-gradient(green,pink)"

document.querySelector(".H2").style.color="pink"

const parag= document.querySelectorAll("p")
console.log(parag);//NodeList

parag[1].style.fontSize="70px"



// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

