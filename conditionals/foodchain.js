/*

Write a series of ternary statements that sets 
the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.

*/


let eatsPlants = true;
let eatsAnimals = true;
let category

category = eatsPlants?(eatsAnimals?'omnivore':'herbivore'):
(eatsAnimals?'carnivore':'undefined')
