
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

	static get MIN_FLOORS() {
		return MIN_FLOORS;
	}
}