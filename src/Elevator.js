
const Elevator_State = {
	MOVING_UP: 'MOVING_UP',
	MOVING_DOWN: 'MOVING_DOWN',
	IDLE: 'IDLE',
	MAINTENANCE_REQUIRED: 'MAINTENANCE_REQUIRED'
}

const STARTING_FLOOR = 1;
const STARTING_TRIPS = 0;
const MAINTENANCE_REQUIRED = 100;

class Elevator {
	constructor(id, floors) {
		this.door = new Door();
		this.buttons = new Buttons(floors);

		this.id = id;
		this.occupied = false;
		this.floor = STARTING_FLOOR;
		this.destination = [];
		this.trips = STARTING_TRIPS;
		this.floorsTraveled = 0;
		this.start = Elevator_State.IDLE; 
	}

	move() {

	}

	setFloor(floor) {

	}

	completeTrip() {

	}

	canTake(floor) {
		
	}
}