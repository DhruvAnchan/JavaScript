// This file demonstrates many core, modern JavaScript concepts.
// For a real application, we would split this into multiple files using ES6 Modules.
// For example, classes in 'models.js', API calls in 'services.js', and the main logic in 'index.js'.

// ====================================================================================
// CONCEPT: ES6 Classes & Inheritance
// Classes are blueprints for creating objects. They encapsulate data with code to work on that data.
// Inheritance allows a class (child) to inherit properties and methods from another class (parent).
// ====================================================================================

class Astronaut {
    // The 'constructor' is a special method for creating and initializing an object instance of a class.
    constructor(id, name, missions) {
        this.id = id;
        this.name = name;
        this.missions = missions; // An array of mission IDs
        this._biography = ''; // Private property convention
    }

    // A 'getter' allows you to get a property value, with the ability to add logic.
    get biography() {
        return this._biography || 'No biography available.';
    }

    // A 'setter' allows you to set a property value, with the ability to add logic or validation.
    set biography(text) {
        // CONCEPT: Template Literals
        // Allows for easier string interpolation and multi-line strings.
        this._biography = `Biography for ${this.name}: ${text.trim()}`;
    }

    // A class method.
    listMissions() {
        console.log(`Astronaut ${this.name} participated in missions: ${this.missions.join(', ')}`);
    }

    // A 'static' method is called on the class itself, not on an instance of the class.
    static getAstronautRole() {
        return 'Space Explorer';
    }
}

// 'Commander' inherits from 'Astronaut' using the 'extends' keyword.
class Commander extends Astronaut {
    constructor(id, name, missions, commands) {
        // 'super()' calls the constructor of the parent class ('Astronaut').
        super(id, name, missions);
        this.commands = commands; // Number of missions commanded
    }

    // Overriding the parent method to add more specific behavior.
    listMissions() {
        super.listMissions(); // Calls the parent method first.
        console.log(`${this.name} has commanded ${this.commands} of these missions.`);
    }
}


// ====================================================================================
// CONCEPT: Asynchronous JavaScript (Async/Await, Promises, Fetch API)
// Modern JS handles operations that take time (like network requests) without blocking the main thread.
// 'async/await' is syntactic sugar over Promises, making async code look and behave more like synchronous code.
// ====================================================================================

const apiService = {
    // An 'async' function always returns a Promise.
    // We can use 'await' inside it to pause execution until a Promise settles.
    fetchData: async (endpoint) => {
        // A 'try...catch' block for handling potential errors during async operations.
        try {
            console.log(`Fetching data from ${endpoint}...`);
            // The Fetch API is a modern interface for making network requests. It returns a Promise.
            const response = await fetch(`https://api.example.com/${endpoint}`);

            // Check if the HTTP request was successful.
            if (!response.ok) {
                // Throwing an error will be caught by the 'catch' block.
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            const data = await response.json(); // .json() also returns a Promise
            return data;
        } catch (error) {
            console.error('Failed to fetch data:', error);
            // Return a default value or re-throw the error depending on desired behavior.
            return null;
        }
    },
    // Mocking the API since api.example.com doesn't exist.
    // In a real scenario, the URL above would be a real API endpoint.
    fetchMockData: (type) => {
        // CONCEPT: Promises
        // A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockData = {
                    astronauts: [
                        { id: 1, name: 'Neil Armstrong', missions: ['Apollo 11', 'Gemini 8'] },
                        { id: 2, name: 'Buzz Aldrin', missions: ['Apollo 11', 'Gemini 12'] },
                        { id: 3, name: 'Chris Hadfield', missions: ['STS-74', 'STS-100'], commands: 1 },
                    ],
                    missions: [
                        { id: 'Apollo 11', year: 1969, success: true },
                        { id: 'Gemini 8', year: 1966, success: true },
                        { id: 'Gemini 12', year: 1966, success: true },
                        { id: 'STS-74', year: 1995, success: true },
                        { id: 'STS-100', year: 2001, success: true },
                    ],
                };
                resolve(mockData[type]);
            }, 1000); // Simulate a 1-second network delay.
        });
    }
};


// ====================================================================================
// CONCEPT: Main Application Logic
// This async function orchestrates the entire script.
// ====================================================================================

// Arrow Function with a Default Parameter. 'minMissions' defaults to 2 if not provided.
const runMissionControl = async (minMissions = 2) => {
    console.log('--- Mission Control Initializing ---');
    console.log(`Role of all astronauts: ${Astronaut.getAstronautRole()}`); // Using the static method.

    // Fetch both sets of data concurrently.
    // CONCEPT: Promise.all
    // Takes an array of promises and resolves when all of them have resolved.
    // CONCEPT: Array Destructuring
    // Unpacks values from an array into distinct variables.
    const [astronautData, missionData] = await Promise.all([
        apiService.fetchMockData('astronauts'),
        apiService.fetchMockData('missions'),
    ]);

    if (!astronautData || !missionData) {
        console.error("Critical data missing. Shutting down.");
        return;
    }

    // CONCEPT: Array.map()
    // Creates a new array by calling a function on every element of the original array.
    const astronauts = astronautData.map(data => {
        // CONCEPT: Object Destructuring & Rest Operator
        // Pulls 'id', 'name', 'missions' from the data object,
        // and bundles the rest of the properties into 'rest'.
        const { id, name, missions, ...rest } = data;

        if (rest.commands) {
            return new Commander(id, name, missions, rest.commands);
        }
        return new Astronaut(id, name, missions);
    });

    // --- Data Processing with Modern JS ---

    // CONCEPT: Array.filter()
    // Creates a new array with all elements that pass the test implemented by the provided function.
    const experiencedAstronauts = astronauts.filter(astro => astro.missions.length >= minMissions);
    console.log(`\n--- Experienced Astronauts (>= ${minMissions} missions) ---`);
    // CONCEPT: Array.forEach()
    // Executes a provided function once for each array element.
    experiencedAstronauts.forEach(astro => {
        // Set biography for one astronaut to demonstrate setter/getter
        if (astro.name === 'Chris Hadfield') {
            astro.biography = 'First Canadian to walk in space.';
        }
        console.log(`\n* ${astro.name}`);
        console.log(`  Biography: ${astro.biography}`); // Uses the getter
        astro.listMissions(); // Calls the (potentially overridden) method
    });


    // CONCEPT: Array.reduce()
    // Executes a "reducer" function on