
class Floor {
	constructor(level) {
		this.level = level;

		this.buttonUp = new Button(Button.Direction.Up); 
		if (level > ElevatorController.MIN_FLOORS)
			this.buttonDown = new Button(Button.Direction.Down);

		this.makeGui();
		this.listenForEvents();
	}

	makeGui() {
		var html = "<div id=\"floor"+this.level+"\" class=\"floor\">Level: "+this.level;
		// Add check for Max_Floor
		html+="<button class=\"floorButton\" value=\""+this.level+"\">Up</button/>";
		if (this.level > ElevatorController.MIN_FLOORS)
			html+="<button class=\"floorButton\" value=\""+this.level+"\">Down</button/>";
		html+="</div>"
		$("#elevatorLevels").prepend(html);
	}

	requestConfirmed(direction) {
		(direction == Button.Direction.Up) ? this.buttonUp.illuminate() : this.buttonDown.illuminate();
	}

	listenForEvents() {
		$('.floorButton').click(function(event) {
			event.stopPropagation();
			event.stopImmediatePropagation();

			elevatorController.floorRequest(parseInt(event.target.value), event.target.textContent)
		});
	}
}