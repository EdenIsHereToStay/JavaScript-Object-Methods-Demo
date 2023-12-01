// Define the 'person' object
const person = {
    name: 'Reggie',
    role: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
};

// Access the output div
const outputDiv = document.getElementById('output');

// Function to add text to the output div
function addToOutput(text) {
    outputDiv.innerHTML += `<p>${text}</p>`;
}

// Using for...in to display property names and values
for (let prop in person) {
    addToOutput(`${prop}: ${person[prop]}`);
}

// Using Object.keys() and Object.values()
const personProps = Object.keys(person);
addToOutput('Properties: ' + personProps.join(', '));

const personVals = Object.values(person);
addToOutput('Values: ' + JSON.stringify(personVals));

// Checking the length of an object
addToOutput('Number of properties: ' + personProps.length);

// Using the spread operator
const name = {
    firstName: 'Reggie',
    lastName: 'Williams',
};

const role = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
};

// Merging objects
const mergedPerson = { ...name, ...role };
addToOutput('Merged Object: ' + JSON.stringify(mergedPerson));
