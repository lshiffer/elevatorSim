
const MIN_FLOORS = 1; 
const MIN_ELEVATORS = 1;

class ElevatorController {

	constructor(elevators, floors) {
		this.elevators = [];
		this.floors = [];
		this.requests = [];
		this.MAX_FLOOR = floors;
		// Dummy floor for [0]
		this.floors.push(null);

		for (var i=0; i < elevators; i++)
			this.elevators.push(new Elevator(i, floors));
		for (var i=1; i <= floors; i++)
			this.floors.push(new Floor(i))
	}

	floorRequest(floor, direction) {
		if (floor > this.MAX_FLOOR || floor < ElevatorController.MIN_FLOORS)
			throw "Elevator cannot go beyond or below highest floor!";

		this.requests.push(new FloorRequest(floor, direction));

		this.floors[floor].requestConfirmed(direction);
	}

	setGui(gui) {
		this.gui = gui;
	}

	getElevators() {
		return this.elevators;
	}

	static get MIN_FLOORS() {
		return MIN_FLOORS;
	}

	static get MIN_ELEVATORS() {
		return MIN_ELEVATORS;
	}
}

class FloorRequest {
	constructor(floor, direction) {
		this.floor = floor;
		this.direction = direction;
	}
}