//Mandatory parameters. The function have to receive the parameters, same type too.
function activate(who:string){
	let msg:string = `${who} has activated the function.`;
	console.log(msg);
}

activate("Gordon");


//Default parameters. The function could receive the parameters, same type. If doesnt, we have a default option.
function activate2(who:string, reference:string = "default value"){
	let msg:string = `${who} has activated the ${ reference }.`;
	console.log(msg);
}

activate2("Peter");
activate2("James", "boat");

//Optional parameters. Could or not be sended. mark whit "?". All but first can be optional.
function activate3(who:string, reference:string = "default value", when?:Date){
	let msg:string = `${who} has activated the ${ reference }.`;
	if(when){
		msg+=`, at ${ when.toLocaleString() }.`;
	}else{
		msg+=".";
	}
	console.log(msg);
}

activate3("James", "boat", new Date());
