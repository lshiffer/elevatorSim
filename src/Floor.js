
class Floor {
	constructor(level) {
		this.level = level;

		this.buttonUp = new Button(Button.Direction.Up); 
		if (level > ElevatorController.MIN_FLOORS)
			this.buttonDown = new Button(Button.Direction.Down);

		this.makeGui();
		this.listenForEvents();
	}
}