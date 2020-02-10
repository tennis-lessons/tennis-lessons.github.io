function myFunction() {
  var x = document.getElementById("more");
  var btn = document.getElementById("viewmorebtn");
  if (x.style.display === "none") {
    x.style.display = "block";
	btn.innerHTML="View Less";
	
  } else {
    x.style.display = "none";
	btn.innerHTML="View More";
  }
}


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n,id) {
  showSlides(slideIndex += n);
}

function currentSlide(n,id) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides;
  slides = document.getElementsByClassName("mySlides");

  //var dots = document.getElementsByClassName("demo");
  //var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  //for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}

