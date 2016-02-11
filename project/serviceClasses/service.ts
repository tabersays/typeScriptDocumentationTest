import {Random} from './random'

export class TestService {
	name: string;
	id: number;
	isActive: boolean;
	strength: number;
	critChance: number;
	constructor() {
		this.name = 'Bob';
		this.id = 0;
		this.isActive = false;
		this.strength = 1;
		this.critChance = 0.01;
	}

	attack(){
		if(this.isActive){
			var r = new Random();
			if(r.getRandom() >= this.critChance) {
				return (2*this.strength);
			}
			else
				return this.strength;
		}
		else
			return 0;
	}
}