
const Door_State = {
	OPENING: 'OPENING',
	OPENED: 'OPENED',
	CLOSING: 'CLOSING',
	CLOSED: 'CLOSED'
}

class Door {
	constructor() {
		this.state = Door_State.CLOSED;
	}

	closeDoor() {
		this.state = Door_State.CLOSED;
	}

	openDoor() {
		this.state = Door_State.OPENED;
	}

	static get state() {
		return Door_State;
	}
}