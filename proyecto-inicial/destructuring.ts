let hero = {
	firstname: "Superman",
	power: "fly",
	age:33
}

// let firstname = hero.name;
// let powe = hero.power;
// let ager = hero.age;
//All this could be declare as:
let {firstname, power, age:old } = hero; //Respect the order. Aliases could be set with :alias.

console.log(firstname, old, power);


let heroes:string[]=["Thor", "Superman", "IronMan"];

let [t, s, i] = heroes;

console.log(s);
