//resolve = function that it will be run if success.
//reject = function that it will be run if error.

let prom1 = new Promise( function ( resolve , reject ){
	//Code for asynchronous process
	setTimeout( () => {
		console.log("Finished promise.");
		//If success
		resolve();
		//If error
		//reject();
	} , 1500);
});

console.log("Step 1");
//promiseName.then (function for resolve, function for reject)
prom1.then(
	function(){ //if success
		console.log("SUCCESS");
	},
	function(){ //if error
		console.error("ERROR");
	}
)
console.log("Step 2");
