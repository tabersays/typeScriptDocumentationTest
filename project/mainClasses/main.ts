import {TestService} from '../serviceClasses/service'

class main {
	test: TestService;
	constructor() {
		this.test = new TestService();
		alert(this.test.name + ' has been made.');
	}
	action(hp: number) {
		var damage = this.test.attack();
		alert(this.test.name + ' attacked for ' + damage + 'damage.');
		alert('You have ' + (hp-damage) + ' health left!');
		return (hp-damage);
	}
}