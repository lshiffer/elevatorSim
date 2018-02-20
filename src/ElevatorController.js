
const MIN_FLOORS = 1; 
const MIN_ELEVATORS = 1;

/*
	TODO
		No 'Up' on max 
*/

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

	run() {
		for (var r in this.requests)
			this.processRequest(this.requests.pop());
		for (var e in this.elevators) 
			this.elevators[e].run();
	}

	processRequest(request) {
		let elevatorID = null;

		for (var e in this.elevators) {
			if (this.elevators[e].getCurrentFloor() == request.floor && this.elevators[e].getCurrentState() == Elevator.state.IDLE) {
				elevatorID = e;
				break;
			}
			else {
				if (elevatorID == null) {
					if (this.elevators[e].canTake(request.floor))
						elevatorID = e;
				}
				else
					elevatorID = this.compareElevators(this.elevators[elevatorID], this.elevators[e], request.floor);
			}
		}

		console.log(elevatorID);

		if (elevatorID != null)	
			this.elevators[elevatorID].dispatchTo(request.floor);
		else
			this.requests.push(request);
	}

	compareElevators(ele1, ele2, floor) {
		if (!ele2.canTake(floor))
			return ele1.getID();

		var curr = ele1;

		var firstDistance = Math.abs(ele1.getCurrentFloor() - floor);
		var secondDistance = Math.abs(ele2.getCurrentFloor() - floor);

		if (ele2.getCurrentFloor() < floor && ele2.getCurrentState() == Elevator.state.MOVING_UP)
			curr = ele2;
		else if (ele2.getCurrentFloor() > floor && ele2.getCurrentState() == Elevator.state.MOVING_DOWN)
			curr = ele2;
		else if (ele2.getCurrentState() == Elevator.state.IDLE) {
			if (ele1.getCurrentState() == Elevator.state.IDLE)
				curr = (firstDistance < secondDistance) ? ele1 : ele2;
			else
				curr = ele2;
		}

		return curr.getID();
	}

	elevatorReport(id, status) {
		if (status == Elevator.state.MOVING_UP)
		 	this.gui.move(id, elevatorController.elevators[id].getCurrentFloor()+1);
		else if (status == Elevator.state.MOVING_DOWN)
		 	this.gui.move(id, elevatorController.elevators[id].getCurrentFloor()-1);
		 else if (status == Door.state.OPENED)
		 	this.gui.openDoor(id);
		 else if (status == Door.state.CLOSED)
		 	this.gui.closeDoor(id);

	}

	guiReport(id, floor) {
		this.elevators[id].setFloor(floor);
	}

	floorRequest(floor, direction) {
		console.log(floor);
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