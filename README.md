### The Problem
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x and y co-ordinates, and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0. The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers, and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

The output for each rover should be its final coordinates and heading.

Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Output:

1 3 N

5 1 E

### Solution

I created this application by using create-react-app and typescript template. I tried to implement Command Design Pattern as a solution, created several objects and interfaces in classes folder.

I had to add backward movement for undo movements that rover can't because of javascript concept. In javascript environment, when a variable refers to an object which includes arrays, the value is the reference to the object, and I used coordinates of the rover as an object.

### Assumptions
* Bottom left corner always (0,0)
* Inputs always have correct syntax form
* Inputs for the rover coordinates and direction always have acceptable values. 

In the project directory, you can run to check application:

### `yarn start` 

And I used debug logs to follow instructions, so you should set '**verbose**' debug level in the console if you want to see them.
