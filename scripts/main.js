let img = document.querySelector('.img1');
img.onclick = function() {
   if (i == 0) {
       img.src = images[1];
       i = 1;
   } else {
    img.src = images[0];
    i = 0;
   }
}
let images = ['images/img1.jpg', 'images/img2.jpg'];
let i = 0;