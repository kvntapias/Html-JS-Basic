var images = [
   "http://static.websguru.com.ar/var/m_7/74/743/21487/341540-veterinaria-la-rural_banner.jpg?v=6.8.1.41459", 
   "https://static.websguru.com.ar/var/m_1/14/14b/31593/511061-veterinaria-acosta-banner.jpg?1448111114228&v=6.8.1.41459", 
   "http://static.websguru.com.ar/var/m_f/f9/f94/35758/555534-consultorio-veterinario-del-parque-banner.jpg",
   "https://www.depilarte.co/colombia/imagenes/botones/reserva-tu-cita.jpg"
];
var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if ( num >= images.length ) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if ( num < 0 ) {
    num = images.length-1;
  }
  slider.src = images[num];
}