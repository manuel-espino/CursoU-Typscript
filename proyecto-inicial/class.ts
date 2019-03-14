export class Hero{
	name:string;
	team:string;
	realName:string;
	alive:boolean=true; //Default value
	wonbattles:number=0;

	constructor(name:string, realName:string,  wonbattles?:number, team:string="None",){
		this.name = name;
		this.realName=realName;
		if (wonbattles){
			this.wonbattles=wonbattles;
		}
		this.team = team;
	}

}

let batman:Hero = new Hero("Batman","Xmen", 2);

console.log(batman);
