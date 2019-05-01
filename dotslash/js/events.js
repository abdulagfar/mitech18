
function openPage(pageName, elmnt, evt,cityName) {
    closeNav()
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = "rgb( 15, 247, 0 ,0.5)";
    menubar();
    opene1(evt, cityName);
    closeNav()
    
}
function opene(){
    var v2;
    var query = window.location.search;

    v2 = query.substring(1);
  

document.getElementById(v2).click();

}
opene();

function opene1(evt, cityName) {
    var i, tabc, tabl;
    tabc = document.getElementsByClassName("tabc");
    for (i = 0; i < tabc.length; i++) {
        tabc[i].style.display = "none";
    }
    tabl = document.getElementsByClassName("tabl");
    for (i = 0; i < tabl.length; i++) {
        tabl[i].className = tabl[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function openstryt() {
    document.getElementById("openstryt").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function closestryt() {
    document.getElementById("openstryt").style.width = "0%";
}

function menubar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  } 
  menubar();
function avl(){
    alert("Stay Tuned")
}
