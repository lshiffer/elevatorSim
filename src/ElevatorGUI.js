
class ElevatorGUI {
	constructor(elevators) {
		var html = Handlebars.templates['elevator'](elevators);
		document.getElementById('elevatorBank').innerHTML = html;
	}

	move() {

	}

	moved() {

	}

	openDoor() {

	}

	closeDoor() {
		
	}
}