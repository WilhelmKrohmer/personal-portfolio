let greeting = document.getElementById('greeting');

/**
 * Array for greetings in different languages.
 **/
let greetings = [
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
 * This function takes a string out of the greetings array 
 * and replaces the text inside 'greeting'. 
 **/
function setGreeting() {
    // Generate random number for greetings array and apply to greeting
    let randomGreetingNumber = Math.floor((Math.random() * greetings.length));
    greeting.textContent = greetings[randomGreetingNumber];
}

window.onload = setGreeting();
