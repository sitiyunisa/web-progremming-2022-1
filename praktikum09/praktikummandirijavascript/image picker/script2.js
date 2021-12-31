function cetak_gambar() {
const hewan= document.getElementById("hewan");
const gambar= document.getElementById("gambar");

if (hewan.value == "Kucing"){
image.src = "kucing.jpg"
alert("ini gambar kucing");
}

if (hewan.value == "Panda"){
gambar.src = "panda.jpg"
alert("ini gambar panda");
}

if (hewan.value == "gorilla"){
gambar.src = "gorilla.jpg"
alert("ini gambar gorilla");
} 

if (hewan.value == "srigala"){
gambar.src = "srigala.jpg"
alert("ini gambar srigala");
}
if (hewan.value == "ular"){
gambar.src = "ular.jpeg"
alert("ini gambar ular");
}

}