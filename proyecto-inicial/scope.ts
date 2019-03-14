// Un archivo simple de TypeScript
function sayHi(nombre:string) {
console.log("Hello, " + name);
}

var wolverine = {
	name:"Logan"
};

sayHi(wolverine.name);

let msg = "Hello";

if(true){
	let msg = "Bye";
}
console.log(msg);

const OPTIONS = "all";
// OPCIONES = "hola"; not allowed

if(true){
	const OPTIONS = "any"; //Thats is not a redefinition, bc the scope is differente.
}
