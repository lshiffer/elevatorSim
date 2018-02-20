
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
		this.state = Elevator_State.IDLE; 
	}

	run() {
		if (!(this.destination.length > 0))
			return;

		if (this.door.state == Door.state.OPENED)
			this.closeDoor();

		else if (this.floor == this.destination[this.destination.length-1])
			this.completeTrip();
		else 
			this.move();
	}

	move() {
		if (this.floor > this.destination[this.destination.length-1])
			this.state = Elevator_State.MOVING_DOWN;
		else
			this.state = Elevator_State.MOVING_UP;

		elevatorController.elevatorReport(this.id, this.state);
	}

	completeTrip() {
		this.door.openDoor();
		this.destination.pop();
		this.trips++;
		if (this.trips == MAINTENANCE_REQUIRED)
			this.state = Elevator_State.MAINTENANCE_REQUIRED;
		else
			this.state = Elevator_State.IDLE;
		elevatorController.elevatorReport(this.id, this.door.state);
	}

	/*
		Should not be able to pick up if direction requested differs from elevator's current direction.
			Current specs state elevator will pick up a request if elevator is moving and will pass that floor.
			Needs clarification. 
	*/
	canTake(floor) {
		if (this.state == Elevator_State.MAINTENANCE_REQUIRED)
			return false;

		if (this.state == Elevator_State.IDLE)
			return true;
		else if (this.floor > floor && this.state == Elevator_State.MOVING_DOWN && floor > this.destination[this.destination.length-1])
			return true;
		else if (this.floor < floor && this.state == Elevator_State.MOVING_UP && floor < this.destination[this.destination.length-1])
			return true;

		return false;
	}

	dispatchTo(floor) {
		this.destination.push(floor);
	}

	openedDoor() {
		elevatorController.elevatorReport(this.id, this.door.state);
	}

	closeDoor() {
		this.door.closeDoor();
		elevatorController.elevatorReport(this.id, this.door.state);
	}

	setFloor(floor) {
		this.floor = floor;
		this.floorsTraveled++; 
	}

	getCurrentFloor() {
		return this.floor;
	}

	getID() {
		return this.id;
	}

	getCurrentState() {
		return this.state;
	}

	static get state() {
		return Elevator_State;
	}
}