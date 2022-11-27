// Write your code in this file!
const currentUser = ' Grace Hopper';

let welcomeMessage = 'Welcome to Flatbook, ';

let currentWelcomeMessage = 'currentUser';

let combinedCurrentWelcomeMessage = 'Welcome to Flatbook, currentUser';

//"High" + "five!";

//"We" + ' ' + `can` + " " + 'concat' + `enate` 

//"Martin" + "Kamau" + "Maina";

let combined1WelcomeMessage = 'Welcome to Flatbook' + currentUser;

let combined2WelcomeMessage = `Welcome to Flatbook, ${currentUser}`;

let combined3WelcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

let excited1WelcomeMessage = welcomeMessage.toUpperCase();

let upperCaseCurrentUser = currentUser.toUpperCase();

let excited2WelcomeMessage = upperCaseCurrentUser;


let excited3WelcomeMessage = `${upperCaseCurrentUser}!`;


let short1Greeting = 'Welcome,';

let short2Greeting = `Welcome, ${currentUser}`;


//const firstInitial = currentUser [0];

//const restOfName = currentUser[1];

currentUser.slice(0,1);

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;

