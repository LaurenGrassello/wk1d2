const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokémon.filter(p => p.name[0] === "B");
console.log(bListPkmn);

const pkmnIds = pokémon.map(p => p.id);
console.log(pkmnIds);


// id's that are divisible by three
const divByThree = pokémon.filter(p => p.id % 3 === 0);
console.log(divByThree);


// pokemon objects that are 'fire' type
const fireType = pokémon.filter(p => p.types.includes("fire"));
console.log(fireType)


// pokemon objects that have more than one type
const moreThanOneType = pokémon.filter(pokémon => pokémon.types.length >1);
console.log(moreThanOneType)


// just pokemon names
const justNames = pokémon.map(pokémon => pokémon.name)
console.log(justNames)


// array with just names of pokemon who id # > 99
const namesIdGreaterThan99 = pokémon.filter(pokémon => pokémon.id > 99).map(pokémon => pokémon.name)
console.log(namesIdGreaterThan99)


// pokemon name with type 'poison'
const poisonName = pokémon.filter(pokémon =>pokémon.types.includes("poison")).map(pokémon => pokémon.name);
console.log(poisonName)


// list of first type of all pokemon whos second type is flying
const secondFlying = pokémon.filter(pokémon => pokémon.types[1] === "flying").map(pokémon => pokémon.types[0])
console.log(secondFlying)


// count of the number of pokemon with 'normal' type
const normalType = pokémon.filter(pokémon => pokémon.types.includes("normal")).length
console.log(normalType)