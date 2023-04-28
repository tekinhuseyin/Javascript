//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const kargo = 15.0;
// const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];



sepettekiler.forEach((ürün) => {
  //!DESTRUCTURİNG
  const { name, img, price, adet } = ürün;

  document.querySelector(
    "#urun-rowlari"
  ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">

<div class="row g-0">

    <div class="col-md-5">
      <img src=${img}  class=" w-100 rounded-start" alt="...">
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price * 0.7).toFixed(
                        2
                      )} </span>
                      <span class="h5 text-dark text-decoration-line-through">${price} </span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam"> ${(
                      price *
                      0.7 *
                      adet
                    ).toFixed(2)} </span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
});

//?browser da en alttaki total kısmının table ı

document.querySelector("#odeme-table").innerHTML = `
<table class="table">
            <tbody>
              <tr class="text-end">
                <th class="text-start">Aratoplam</th>
                <td>$<span class="aratoplam">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Vergi(18%)</th>
                <td>$<span class="vergi">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Kargo</th>
                <td>$<span class="kargo">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Toplam</th>
                <td>$<span class="toplam">0.00</span></td>
              </tr>
            </tbody>
          </table>

`;

//! SİLME

document.querySelectorAll(".remove-ürün").forEach((btn) => {
  btn.onclick = () => {
    //! ekrandan silme
    btn.closest(".card").remove();

    //! diziden silme
    sepettekiler = sepettekiler.filter(
      (ürün) =>
        ürün.name != btn.closest(".card").querySelector("h5").textContent
    );

    //! ekrandan silinen elemanı tekrar güncel haliyle total e ve kerana yansıttık
    hesaplaTotal();
  };
});

//! ADET DEĞİŞTİRME

document.querySelectorAll(".adet-controller").forEach((kutu) => {
  const minus = kutu.firstElementChild;
  const amount = kutu.children[1];
  //  const amount=minus.nextElementSibling
    const plus = kutu.lastElementChild;
  
  minus.onclick = () => {
    //! ekranda adeti azalttık
    amount.textContent -= 1;

    //!diziden adeti azaltalım

    sepettekiler.map((ürün) => {
      if (ürün.name == minus.closest(".card").querySelector("h5").textContent) {
        ürün.adet = ürün.adet - 1;
      }
    });
    
    //!ürün-toplam kısmını ekranda güncelleyelim
minus.closest(".card").querySelector(".ürün-toplam").textContent=minus.closest(".card").querySelector(".indirim-price").textContent * amount.textContent


hesaplaTotal()



  };
  
});


console.log(sepettekiler);
hesaplaTotal();

function hesaplaTotal() {
  const ürünToplam = document.querySelectorAll(".ürün-toplam");

  //? araToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
  //?Reduce tam olarak Array istiyor, nodelist yeterli değil
  const araToplam = Array.from(ürünToplam).reduce(
    (toplam, eleman) => toplam + Number(eleman.textContent),
    0
  );

  document.querySelector(".aratoplam").textContent = araToplam;
  document.querySelector(".vergi").textContent = (araToplam * 0.18).toFixed(2);
  // document.querySelector(".kargo").textContent=araToplam > 0 ? kargo: 0
  document.querySelector(".kargo").textContent = 15.0;
  document.querySelector(".toplam").textContent = (
    araToplam +
    araToplam * 0.18 +
    15.0
  ).toFixed(2);
}
