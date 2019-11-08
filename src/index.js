let wears = document.querySelectorAll('.wears');
let theRightArr = document.querySelector('#arig');
let theLeftArr = document.querySelector('#alef');
let current = 0;
let textSlider = document.querySelector('.arrow-text');
let weather = document.querySelectorAll('.c');
let currentWeather = 0;
let quote = document.querySelectorAll('.qo');
let condition = 0;



const name = ['Sunny', 'Rainy', 'Snowy'];

// change textContent of name
function changeName () {
    if(current === 0){
        textSlider.textContent = 'Sunny';
    }else if(current === 1) {
        textSlider.textContent = 'Rainy';
    } else {
        textSlider.textContent = 'Snowy';
    }
}



// clear all images
function reset() {
    for (let i = 0; i < wears.length;i++){
        wears[i].style.display = 'none'
    }
}

function resetWeather() {
    for (let i = 0; i < weather.length; i++){
        weather[i].style.display = 'none';
    }
}

function resetQuote() {
    for (let i = 0; i < quote.length;i++){
        quote[i].style.display = 'none';
    }
}


// initialize weather
function changeWeather() {
    resetWeather();
    weather[0].style.display = 'grid';
}
changeWeather();

// init slider
function startSlide() {
    reset(); 
    wears[0].style.display = 'flex';
    changeName();
}

// init quote
function quoteInit() {
    resetQuote();
    quote[0].style.display = 'grid';
}
quoteInit();  

// show prev
function slideLeft() {
    reset();
    wears[current - 1].style.display = 'flex';
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


// show next
function slideRight() {
    reset();
    wears[current + 1].style.display = 'flex';
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

theLeftArr.addEventListener('click', function() {
    if(current === 0){
        current = wears.length;
        changeName();

    }
    slideLeft();
});

theLeftArr.addEventListener('click', function() {
    if(currentWeather === 0){
        currentWeather = weather.length;
        
        changeName();
    }
    console.log('left, weather');
    slideWeatherLeft();
});


theLeftArr.addEventListener('click', function() {
    if(condition === 0){
        condition = quote.length;
        
        changeName();
    }
    console.log('left, weather');
    slideQuoteLeft();
});

theRightArr.addEventListener('click', function() {
    if(current === wears.length -1){
        current = -1;
        changeName();
    }
    slideRight();
});


// right arr click
theRightArr.addEventListener('click', function() {
    if (currentWeather === weather.length -1){
        currentWeather = -1;
        changeName();

    }
    console.log('right, weather');

    slideWeatherRight();
});


theRightArr.addEventListener('click', function() {
    if (condition === quote.length -1){
        condition = -1;
        changeName();

    }
    console.log('right');

    slideQuoteRight();
});

startSlide();

