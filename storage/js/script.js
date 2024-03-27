$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#home, #about").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// === Ring animation [ START ] ===
var animatedImage = document.getElementById('ring');
var c = 1;
var data

function startAnimation() {
  clearInterval(data);
  data = setInterval(() => {
    c++;
    if (c > 95) {
      c = 0;
    }

    if (c < 10) {
      c = `0${c}`;
    }


    animatedImage.src = `./storage/imgs/ring/0${c}.webp`;
    // console.log('loi ', c);
  }, 100, null, true);
}

startAnimation();


// === Ring animation [ END ] ===


// === Star animation [ START ] ===
//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = 650;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function animate() {
  //Random position and size of stars;
  let x = W * Math.random();
  let y = H * Math.random();
  // let r = 2.5 * Math.random();
  let r = 0.55;

  //Draw the stars;
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
  setTimeout(animate, 100);
}
animate();
// === Star animation [ END ] ===