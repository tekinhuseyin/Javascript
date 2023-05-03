let showList = []; //!boş bir array aç. alttaki arama olayında datayı görebilmek için global e boş bir array açıp, fetch ile gelen data yı bu boş array e attık

//!ilk ekrandaki resimleri api den çekiyoruz (search meal by name)

//www.themealdb.com/
https: fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((dataa) => {
    console.log(dataa.meals);
    showList = dataa;
    ekranaBastir(showList.meals);
  });

function ekranaBastir(data) {
  //!ekranı temizle, hangi dizi geldiyse o basılabilsin
  document.querySelector(".food").innerHTML = "";

  data.forEach((w) => {
    document.querySelector(".food").innerHTML += `<div class="col-md-3 p-4 m-4">
    
   <p>${w.strMeal}</p> 
    <img style=width:200px src=${w.strMealThumb} />
    </div>`;
  });
}

//!arama inputunda arama yapma (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("#ara").oninput = (e) => {
  //? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır, mesela onclick te sadece e.value kullanılır, çünkü inputla işimiz bitince onclick ile inputtaki veriyi topla git
  //    console.log(e.target.value);

  let veri = showList.meals.filter((a) =>
    a.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(veri);

  ekranaBastir(veri);
};

//!bayraklara tıklanınca, tıklanan bayrağın yemekleri ekrana gelsin

document.querySelectorAll(".ülke").forEach(
  (item) =>
    (item.onclick = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item.id}`)
        .then((res) => res.json())
        .then((veri) => ekranaBastir(veri.meals));
    })
);
