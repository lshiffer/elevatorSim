
const Direction = {
	Up: "Up",
	Down: "Down"
}

class Button {
	constructor(direction) {
		this.isIlluminated = false;
		this.direction = direction;
	}

	illuminate() {
		this.isIlluminated = true;
	}

	static get Direction() {
		return Direction;
	}
}