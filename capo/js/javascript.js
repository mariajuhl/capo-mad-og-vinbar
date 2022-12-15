/*Fade up effekt ved sektioner mens der scrolles på siden*/ 

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


/*Horisontal billede gallery - bevæger sig mens du scroller på siden */
  var $g = document.querySelector(".gallery");
  var $h = document.querySelector(".horizontal");
  
  var translate = 1300;
  const halfViewport = window.innerWidth / 1;
  window.addEventListener("wheel", (e) => {
    event.preventDefault();
    const finalPosition = translate + -e.deltaY;
    if (finalPosition < halfViewport && finalPosition > (-20 * halfViewport)) {
      translate += -e.deltaY;
  
      $h.style.transform = `translate(${translate}px)`;
    }
  });

/*Starter video når den er synlig på siden*/
document.addEventListener("scroll",myVideoFunction);
function myVideoFunction() {

        var infoVideo = document.getElementById("video");
            if (infoVideo.getBoundingClientRect().bottom < 250 || infoVideo.getBoundingClientRect().top > 250)
                infoVideo.pause();
            else
                infoVideo.play();
}


/*Lokation med mapbox - tredjepartskode  */ 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFqdWhsIiwiYSI6ImNsOGlrZ3d0ODBya28zeG1yemo1Y3cycjEifQ.WCP_kwknAG5Qc03QGB_7pw';
const monument = [10.2041, 56.1604];
const map = new mapboxgl.Map({
    container: 'map',
  
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mariajuhl/clb0rv8gh001r14lb2ace41ht',
    center: monument,
    zoom: 15
});

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Capo - Ny Munkegade 4, 8000 Aarhus C'
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);


/*Pop up ved "skriv til os"-funktion*/

function thankYou() {
  window.alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
}
