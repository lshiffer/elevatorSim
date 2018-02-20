## Elevator Simulator ##

Simulates a single or bank of 'n' elevators for 'm' floors.

Vanilla JS, HTML, and CSS are primarily used.  Handlebars template is used for the ElevaterGUI.  jQuery crept in to quickly add new divs with necessary ids and classes for the UI.  To do the same in vanilla JS is a bit verbose when watching the time. 

**/**

**index**.html
Initial view.

**/src**

**Button**.js
Represents a button for either the floor or elevator cabin.

**Buttons**.js
Composed of an array of Button for the elevator cabin. 

**Door**.js
Represents the elevator door.  Has four states though only two are used in the current implementation. 

**Elevator**.js
Represents the elevator.  Elevator consists of four unique states and is composed of a Door and Buttons.  Floors to visit are tracked in a destination array which is used as a stack.  Elevator reports to ElevatorController.

**ElevatorController**.js
Manages an array of Elevators as well as Floors.  Requests are recieved from Floor's Buttons and are assigned to an Elevator based on Elevator's distance from the requested floor as well as the direction Elevator is moving.  ElevatorController also manages Elevator's gui.

**ElevatorGUI**.js
Provides a visual representation of Elevator's current floor and the state of Elevator's Door.  Gui is also used to simulate time in traveling from floor to floor.

**Floor**.js
Each Floor is composed of two Buttons, one for Down and one for Up.  Floor serves as it's own GUI.

**main**.js
Entry to the simulation.  Recieves initital input and instantiates ElevatorController and ElevatorGUI.  main also maintains the simulations running clock.

**/public/styles**
A single CSS sheet is used. 

**/templates**
Pre-compiled Handlebars template as well as a the uncompiled. 

### To Run ###
From '/': 

1.  Drag index.html into a browser*.
2.  Enter number of Elevators and Floors in their text field, then click 'Set Up!'
3.  Click the Up and Down buttons on each of the levels to see the elevators move to the floor and open/close their doors.

*Tested on Chrome.


