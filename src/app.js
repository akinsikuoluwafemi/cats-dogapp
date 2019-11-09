// use another variable for for the weather


// select Element
const container = document.querySelector('.container');
const containerOne = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');
const catsDiv = document.querySelector('.cats-div');
const body = document.querySelector('body');
const right = document.querySelector('.right');
const arr = document.querySelector('.ar');
const containerThree = document.querySelector('.container-three');
const dogsDiv = document.querySelector('.dogs-div');
const containerDogOne = document.querySelector('.container-dog-one');
const containerDogTwo = document.querySelector('.container-dog-two');
const forward = document.querySelector('.forward');
catsDiv.addEventListener('click', e => {
    containerOne.style.display = 'none';
    containerTwo.style.display = 'grid';
    
})

right.addEventListener('click', e => {
    console.log(e);
    containerTwo.style.display = 'none';
    containerThree.style.display = 'grid';
})
forward.addEventListener('click', e => {
    containerDogOne.style.display = 'none';
})


dogsDiv.addEventListener('click', e => {
    containerOne.style.display = 'none';
    containerDogOne.style.display = 'grid';
    
})







let sliderImages = document.querySelectorAll('.wears'),
    leftArrow = document.querySelector('#aleft'),
    rightArrow = document.querySelector('#aright'),
    current = 0,
    textSlider = document.querySelector('.arrow-text'),
    name = ['Sunny', 'Rainy', 'Snowy'],
    weather = document.querySelectorAll('.c'),
    quote = document.querySelectorAll('.qo')
    currentWeather = 0,
    condition = 0;
    

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

// reset quote
function resetQuote() {
    for (let i = 0; i < quote.length;i++){
        quote[i].style.display = 'none';
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


// init quote
function quoteInit() {
    resetQuote();
    quote[0].style.display = 'grid';
}
quoteInit();   


// Show previous cloth
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'flex';
    current--;
    changeName();

}
// Show previous weather
function slideWeatherLeft () {
    resetWeather();
    weather[currentWeather - 1].style.display = 'grid';
    currentWeather--;
}

// Show previous quote
function slideQuoteLeft () {
    resetQuote()
    quote[condition - 1].style.display = 'grid';
    condition--;
}



// show next cloth
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'flex';
    current++;
    changeName();   
}
// show next weather
function slideWeatherRight() {
    resetWeather();
    weather[currentWeather + 1].style.display = 'grid';
    currentWeather++;
}

// show next quote
function slideQuoteRight() {
    resetQuote();
    quote[condition + 1].style.display = 'grid';
    condition++;
}


// left arr click
leftArrow.addEventListener('click', function() {
    if(current === 0){
        current = sliderImages.length;
        
        changeName();
    }
    console.log('left');

    slideLeft();

});

// left arr click
leftArrow.addEventListener('click', function() {
    if(currentWeather === 0){
        currentWeather = weather.length;
        
        changeName();
    }
    console.log('left, weather');
    slideWeatherLeft();
    
});

leftArrow.addEventListener('click', function(){
    weather.forEach(el => {
        // el.classList.add('left');
    })
    console.log('console')

})

rightArrow.addEventListener('click', function(){
    weather.forEach(el => {
        // el.classList.add('right');
    })
    console.log('console')
})

// left arr click
leftArrow.addEventListener('click', function() {
    if(condition === 0){
        condition = quote.length;
        
        changeName();
    }
    console.log('left, weather');
    slideQuoteLeft();
});



// right arr click
rightArrow.addEventListener('click', function() {
    if (current === sliderImages.length -1){
        current = -1;
        changeName();

    }
    console.log('right');

    slideRight();
});



// right arr click
rightArrow.addEventListener('click', function() {
    if (currentWeather === weather.length -1){
        currentWeather = -1;
        changeName();

    }
    console.log('right, weather');

    slideWeatherRight();
});

// right arr click
rightArrow.addEventListener('click', function() {
    if (condition === quote.length -1){
        condition = -1;
        changeName();

    }
    console.log('right');

    slideQuoteRight();
});


