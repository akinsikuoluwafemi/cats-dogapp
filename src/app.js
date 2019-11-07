// select Element
const container = document.querySelector('.container');
const containerOne = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');
const catsDiv = document.querySelector('.cats-div');
const body = document.querySelector('body');
const right = document.querySelector('.right');
const arr = document.querySelector('.ar');
const containerThree = document.querySelector('.container-three');


catsDiv.addEventListener('click', e => {
    containerOne.style.display = 'none';
    containerTwo.style.display = 'grid';
    
})

right.addEventListener('click', e => {
    console.log(e);
    containerTwo.style.display = 'none';
    containerThree.style.display = 'grid';
})


let sliderImages = document.querySelectorAll('.wears'),
    leftArrow = document.querySelector('#aleft'),
    rightArrow = document.querySelector('#aright'),
    current = 0,
    textSlider = document.querySelector('.arrow-text'),
    name = ['Sunny', 'Rainy', 'Snowy'],
    weather = document.querySelectorAll('.c');
    

    // clear all images
function reset() {
    for (let i = 0; i < sliderImages.length;i++){
        sliderImages[i].style.display = 'none';
        
    }
}

// change textContent
function changeName () {
    if(current === 0){
        textSlider.textContent = 'Sunny';
    }else if(current === 1) {
        textSlider.textContent = 'Rainy';
    } else {
        textSlider.textContent = 'Snowy';
    }
}



function resetWeather() {
    for (let i = 0; i < weather.length; i++){
        weather[i].style.display = 'none';
    }
}


// initialise slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'flex';
    changeName();
    
}

startSlide();

// initialize weather
function changeWeather() {
    resetWeather();
    weather[0].style.display = 'grid';
}
changeWeather();

// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'flex';
    current--;
    changeName();

}
// Show previous
function slideWeatherLeft () {
    resetWeather();
    weather[current - 1].style.display = 'grid';
    current--;
}




// show next 
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'flex';
    current++;
    changeName();   
}
// show next 
function slideWeatherRight() {
    resetWeather();
    weather[current + 1].style.display = 'grid';
    current++;
}


// left arr click
leftArrow.addEventListener('click', function() {
    if(current === 0){
        current = sliderImages.length || weather.length;
        
        changeName();
    }
    console.log('left');

    slideLeft();
    slideWeatherLeft();
});

// right arr click
rightArrow.addEventListener('click', function() {
    if (current === sliderImages.length -1 || current === weather.length -1){
        current = -1;
        changeName();

    }
    console.log('right');

    slideRight();
    slideWeatherRight();
});


