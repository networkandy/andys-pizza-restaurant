let x = 0;
const time = 5000;
const images = [];


images[0] = 'img1.jpg';
images[1] = 'img28.jpg';
images[2] = 'img3.jpg';
images[3] = 'img7.jpg';
images[4] = 'img6.jpg';


//Slide show code

function slideShow(){

    document.querySelector('.header').style.background = `url('../img/${images[x]}')`;
    document.querySelector('.header').style.backgroundSize = '1500px 800px';
    if(x < images.length - 1){
        x++;
    } else {
        x = 0;
    }
 
}


setInterval(slideShow, time);