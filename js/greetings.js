let greeting = document.querySelector('.greetings__text');

/**
 * Array for possible greetings in different languages.
 **/
let possibleGreetings = [
    "Moin, moin!", 
    "Hey there!", 
    "Ciao ciao!", 
    "Qué onda!", 
    "Buenos días!",
    "Hey, hey!",
    "Gude!",
    "Órale!",
    "What's up?",
    "Hola, hola!"
];

/**
 * Replace text inside 'greeting' element with
 * random possibleGreetings array item
 **/
function setGreeting() {
    let randomGreetingIndex = Math.floor((Math.random() * possibleGreetings.length));
    greeting.textContent = possibleGreetings[randomGreetingIndex];
}

window.onload = setGreeting();
