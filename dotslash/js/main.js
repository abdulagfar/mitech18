  
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
} 

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(11.877389, 75.497278),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}



function closestryt() {
    document.getElementById("openstryt").style.width = "0%";
}
function openstryt() {
    document.getElementById("openstryt").style.width = "100%";
}
function avl(){
    alert("Stay Tuned")
}