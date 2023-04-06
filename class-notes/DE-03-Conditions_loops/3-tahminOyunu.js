//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.
const rastgele=Math.ceil(Math.random()*20)// 0 ve 20 arasinda bir sayi olsun
// bilgisayara mat rondam deyince bilg 0 ve 100 arasinda bir sayi tutar. ama en kücük detaina kadar yazar mesela 0,0001 gibi. bu yüzden yuvarlmam lazim. Bundan dolazi math round ile birlikte kullanmam lazim
console.log(rastgele);
let hak=5;
while (hak>0) {
    const tahmin= +prompt("lütfen bir sayi tahmin ediniz")
     hak--;
     if(tahmin==rastgele){
        console.log("tebrikler bildiniz:partying_face:");
        break;
     }else if(tahmin<rastgele){
        console.log("arttir :chart_with_downwards_trend:");
        console.log(hak, "hakkiniz kaldi");
     }else{
        console.log("Azalt :chart_with_upwards_trend:");
        console.log(hak, "hakkiniz kaldi");
     }
}
if(hak==0){
    console.log("üzgünüz bilemediniz");
}