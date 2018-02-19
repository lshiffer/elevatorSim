
class Buttons {
	constructor(floors) {
		this.buttons = [];
		for (var i=1; i<=floors; i++)
			this.buttons.push(new Button(i));
	}
}