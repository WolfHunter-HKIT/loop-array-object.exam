// Exercise 12.1
const array = [3, 6, 5, 1, 7, 5, 2, 8];
let arraySum = 0;

for (let i = 0; i < array.length; i++) {
	arraySum += array[i];
}

console.log(`Array: [${array}] \nsum: ${arraySum}`);

// Exercise 12.2
const movies = [
	["The Godfather", 1972],
	["The Dark Knight", 2008],
	["The Lord of the Rings: The Return of the King", 2003],
	["The Matrix", 1999],
	["Interstellar", 2014],
];

console.log(movies.filter((element) => element[1] > 2000));

// Exercise 12.3
const game = {
	name: "Super Mario Party",
	genre: "3D Platformer",
	characters: [
		["Mario", true],
		["Luigi", true],
		["Peach", true],
		["Daisy", true],
		["Wario", false],
		["Waluigi", false],
		["Yoshi", true],
		["Rosalina", true],
		["Donkey Kong", false],
		["Diddy Kong", false],
		["Bowser", false],
		["Goomba", false],
		["Shy Guy", false],
		["Koopa", false],
		["Monty Mole", false],
		["Bowser Jr.", false],
		["Boo", false],
		["Hammer Bro", false],
		["Dry Bones", false],
		["Pom Pom", false],
	],
};
// Friendly
let log = game.characters.filter((element) => element[1] == true);
log.forEach((e) => e.pop());
console.log(`Geriečiai: ${log}`);
// Hostile
log = game.characters.filter((element) => element[1] == false);
log.forEach((e) => e.pop());
console.log(`Blogiečiai: ${log}`);
