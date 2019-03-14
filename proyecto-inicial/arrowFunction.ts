let myFunction = function ( a ){
	return a;
}

//name = parameter = return;
//1 parameter
let myFunctionArrow = a => a;

let myFunction2 = function (a:number, b:number){
	return a+b;
}
//2 or more parameter
let myFunction2Arrow = (a:number, b:number) => a + b;

let myFunction3 = function (name:string){
	if(name.length>4){
		name = name.toUpperCase();
	}
	return name;
}

//When we need to run more than one line;
let myFunction3Arrow = (name:string) =>{
	if(name.length>4){
		name = name.toUpperCase();
	}
	return name;
}

console.log(myFunction("Hello"));
console.log(myFunctionArrow("Bye"));
console.log(myFunction2(3,4));
console.log(myFunction2Arrow(4,6));
console.log(myFunction3("Ana"));
console.log(myFunction3Arrow("Tomas"));


let hulk = {
	name: "Hulk",
	power(){
		/*In some cases, as it happens whit setTimeout, "this" refers to global. Thus becouse this.name will be undefined or will take the value of a global variable with the same name.
		WE AVOID THIS SITUATION USING ARROW FUNCTION.
		*/
		setTimeout(function(){
			console.log(this.name +" has smashed!")
		}, 1500)
	}
}

hulk.power();

let superman = {
	name: "Superman",
	power(){
		//Whithin an arrow function "this" it refers to the upper scope.
		setTimeout( () => console.log(this.name +" has flown away!"), 1500)
	}
}

superman.power();
