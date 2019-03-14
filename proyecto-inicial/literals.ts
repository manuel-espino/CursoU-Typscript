let firstname:string = "Peter";
let lastname:string = "Smith";
let old:number = 44;

let dates:string= `Hello, ${ firstname } ${ lastname }.
You are ${ old } years old. `;

console.log(dates);

function getName(){
	return "Peter";
}

let text:string = ` ${ getName() }`; //Between {} we can use any JS expression, even functions.
console.log(text);
