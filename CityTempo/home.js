// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlidess(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex != 0) {
        dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    //console.log(slideIndex)
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
//auto complete
var address = ["Ahmedabaad Gujarat, India", "Agra Uttar Pradesh, India", "Amritsar Punjab, Inida", "Aurangabad Maharastra", "Ajmer Rajasthan, India", "Bangluru Karnataka, India", "Bhopal, India", "Chennai Tamil Naidu, India", "Chandigarh India", "Etawah Uttar Pradesh, India", "Erode Tamil Naidu, India", "Delhi, India", "Dehradun Uttrakhand, India", "Dwarka Gujrat, India", "Daman Dadra and Nagar Haveli", "Dhanbad Jharkhand, India", "Faridabaad Haryana, India", "Faizabaad Uttar Pradesh, India", "Gorakhpur Uttar Pradesh, India", "Gurgaon Haryana, India", "Goa, India", "Gwalior Madhya Pradesh, India", "Hyderabad Telangana, India", "Haridwar UttraKhand, India", "India, India", "Indore Madhya Pradesh, India", "India Gate Rajpath, India", "jaipur Rajasthan, India", "jodhpur Rajasthan, India", "jammu, India", "jabalpur Madhya Pradesh, India", "Kedarnath Uttrakhand, India", "Kolkata West Bengal, India", "Kanpur Uttar Pradesh, India", "Kota Rajasthan, India", "Lucknow Uttar Pradesh, India", "Ludhiana Punjab, India", "Leh", "Mumbai Maharastra, India", "Manali Himachal Pradesh, India", "Meerut Uttar Pradesh, India", "Mathura UttarPradesh, India", "Nagpur Maharahstra, India", "Nashik Maharashtra, India", "Noida Uttar Pradesh, India", "Nainital Uttrakhand, India", "New Delhi Delhi, India", "Ooty Tamil Naidu, India", "Odisha, India", "Pune Maharashtra, India", "Patna Bihar, India", "Panipat Haryana, India", "Patiala Punjab, India", "Qutub Minar Seth Sarai, India", "Qazigund", "Rajkot Gujarat, India", "Raipur Chattisgarh, India", "Ranchi Jharkhand, India", "Rishikesh Uttrakhand, India", "Surat Gujarat, India", "Shimla Himachal Pradesh, India", "Solapur Maharashtra, India", "Sonipat Haryana, India", "Tirupati Andhra Pradesh, India", "Thane Maharashtra, India", "Taj Mahal Dharmapuri, India", "Udaipur Rajasthan, India", "Ujjain Madhya Pradesh, India", "Vijaywada Andhra Pradesh, India", "Varanasi Uttra Pradesh, India", "Vapi Gujarat, India", "Warangal Telangana, India", "Wagholi Pune, Maharashtra, India", "West Bengal, India", "Xero Degrees Middle", "XLRI -Xavier School", "Xrbia Hnjewadi Towns, India", "Yavatmal Mahrashtra, India", "Yamuna Nagar Haryana, India", "Yamuna Expressway, India", "Zirakpur Punjab, India", "Zaheerabad, India", "Zira Punjab, India", "Zanskar"]



autocomplete(document.getElementById("myPickUpAdd"), address);
autocomplete(document.getElementById("myDropUpAdd"), address);

function proceedToEstimate() {
    var pickUpLocation = document.getElementById("myPickUpAdd").value;
    var dropOffLocation = document.getElementById("myDropUpAdd").value;
    var name = document.getElementById("optionalName").value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("pickUpLoc", pickUpLocation);
    localStorage.setItem("dropOffLoc", dropOffLocation);

    window.location.href = "./CityTempo/estimatePg.html"
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}




// first section ends 
function showSlidess(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var wallpaperIndex = 0;
wallpaperSlides();

function wallpaperSlides() {
    var i;
    var wallpaper = document.getElementsByClassName("wallpaper");
    if (wallpaperIndex != 0) {
        wallpaper[wallpaperIndex - 1].style.display = "none";
    }
    wallpaperIndex++;
    if (wallpaperIndex > wallpaper.length) { wallpaperIndex = 1 }
    wallpaper[wallpaperIndex - 1].style.display = "block";
    setTimeout(wallpaperSlides, 1500); // Change image every 1 seconds
}
function currentTransport(n) {
    showTransport(transportIndex = n);
}

function showTransport(n) {
    var i;
    var transports = document.getElementsByClassName("adjust");
    for (i = 0; i < transports.length; i++) {
        transports[i].className = transports[i].className.replace("on01", "")
    }
    var triangle = document.getElementsByClassName("vehicleSelector");
    for (i = 0; i < triangle.length; i++) {
        triangle[i].classList.remove("on03")
    }
    photoChanger(n)
    vechicleChange(n)
    transports[n - 1].className += " on01";
    triangle[n - 1].className += " on03";
    
}
function photoChanger(n) {
    let img = document.getElementById("imgPosition")
    if(n==1) img.src = "./images/tata_ace.png"
    if (n == 2) img.src = "./images/tata_407.png"
    if (n == 3) img.src = "./images/3_wheeler.png"
    if (n == 4) img.src = "./images/ace_helper.png"
    if (n == 5) img.src = "./images/3_wheeler_helper.png"  
}
function vechicleChange(n) {
    let text = document.getElementById("t03");
    let cap = document.getElementById("cap03");
    let dim = document.getElementById("dim03");
    let pr = document.getElementById("pr03");
    if (n == 1) {
        text.textContent = "RENT TATA ACE";
        cap.textContent = "750 kg";
        dim.textContent = "4ft x 7ft x 5f";
        pr.textContent = "₹ 210"
    }
    if (n == 2) {
        text.textContent = "RENT TATA 407";
        cap.textContent = "2500 kg";
        dim.textContent = "9ft x 5.5ft x 6f";
        pr.textContent = "₹ 625";
    }
    if (n == 3) {
        text.textContent = "RENT 3 WHEELER";
        cap.textContent = "500 kg";
        dim.textContent = "5.5ft x 4.5ft x 5ft";
        pr.textContent = "₹ 160";
    }
    if (n == 4) {
        text.textContent = "RENT ACE (HELPER)";
        cap.textContent = "750 kg";
        dim.textContent = "7ft x 4ft x 5ft";
        pr.textContent = "₹ 210";
    }
    if (n == 5) {
        text.textContent = "RENT 3 WHEELER (HELPER)";
        cap.textContent = "500 kg";
        dim.textContent = "6ft x 5ft x 5ft";
        pr.textContent = "₹ 160";
    }
    
}
var last_question

function toggleElement(id)
{
    if (last_question != undefined) {
        console.log(document.getElementById(id))
        document.getElementById(last_question).classList.toggle("dis_none");
        document.getElementById(last_question+"Col").classList.toggle("colBlue");
    }
    if(document.getElementById(id).style.display == 'none')
    {
        element.classList.toggle("dis_none");
        console.log(id)
        document.getElementById(id+ "Col").style.color = 'blue';
    }
    else
    {
        document.getElementById(id).classList.toggle("dis_none");
        document.getElementById(id+"Col").classList.toggle("colBlue");
    }
    last_question= id;
}
