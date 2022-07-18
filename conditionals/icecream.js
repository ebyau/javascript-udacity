/*if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
*/

let flavor = 'chocolate';
let vessel = ' cone';
let toppings = 'sprinkles';
if ((flavor === 'vanilla' || flavor === 'chocolate')&&
(vessel === 'cone' || vessel === 'bowl') &&
(toppings === 'sprinkles' || toppings === 'peanuts')){
    console.log('I\'d like two scoops of '+flavor+' icecream in a '+vessel+' with '+toppings)
}