
document.addEventListener("DOMContentLoaded", function(){
  	init();
});

function init() {
	initEventListeners();
}

function initEventListeners() {
	document.getElementById("setupSimulation").addEventListener("click", setupSimulation);
}

function setupSimulation() {
	let {elevatorCount, floorCount} = getInitInput();

	if (!(elevatorCount && floorCount))
		return;

	disableInitInput();

	createSimulation(elevatorCount, floorCount);
}

function createSimulation(elevators, floors) {
	ElevatorController.MAX_FLOORS = floors;
	elevatorController = new ElevatorController(elevators, floors);
	elevatorGui = new ElevatorGUI(elevatorController.getElevators());
	elevatorController.setGui(new ElevatorGUI(elevatorController.getElevators()));

	window.setInterval(function() {
		elevatorController.run()
	}, 1000);
}

function getInitInput() {
	document.getElementById("errorMessage").innerHTML = "";

	var elevatorCount = document.getElementById("elevatorCount").value;
	var floorCount = document.getElementById("floorCount").value;

	if (!(elevatorCount >= ElevatorController.MIN_ELEVATORS && floorCount > ElevatorController.MIN_FLOORS)) {
		document.getElementById("errorMessage").innerHTML ="Elevator and Floors must be greater than 0";
		return {};
	}

	return {elevatorCount, floorCount};
}

function disableInitInput() {
	document.getElementById("initSettings").style.opacity = '.5';
	document.getElementById("setupSimulation").style.cursor = 'not-allowed';
	document.getElementById("setupSimulation").removeEventListener("click", setupSimulation);
}