
class ElevatorGUI {
	constructor(elevators) {
		var html = Handlebars.templates['elevator'](elevators);
		document.getElementById('elevatorBank').innerHTML = html;
	}

	move(id, destination) {
		setTimeout(this.moved, 1000, id, destination);
	}

	moved(id, destination) {
		$('#elevatorFloor'+id).html(destination);
		elevatorController.guiReport(id, destination);
	}

	openDoor(id) {
		$('#elevatorDoor'+id).html("Opened");
	}

	closeDoor(id) {
		$('#elevatorDoor'+id).html("Closed");
	}
}