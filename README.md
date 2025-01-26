# workshop_7:

You can view the generated effect by visiting the following link:

[View Workshop 7 Effect](  https://tianhui1112.github.io/workshop-5/)


## My Idea


We aim to simulate a snowy scene at the University of Auckland. To achieve this, we loaded a photo of the University of Auckland as the background and designed a particle system to mimic the falling snow.



## Project workflow


1.1: Create a snow class

1.1.1: Initializes the snowflake's properties, including random position, size, falling speed, and horizontal drift caused by wind.
```javascript
constructor() {
  this.x = random(width); // Randomly generate horizontal position
  this.y = random(-50, 0); // Randomly generate vertical position (slightly above the canvas)
  this.size = random(2, 8); // Randomly generate snowflake size
  this.speed = random(1, 3); // Randomly generate snowflake falling speed
  this.wind = random(-0.5, 0.5); // Randomly generate horizontal drift due to wind
}
```
The Snowflake class defines the properties and behavior of the snowflake particles：

	•	Constructor: Initializes the snowflake's properties, including random position, size, falling speed, and horizontal drift due to wind.
	•	update(): Updates the snowflake's position, causing it to fall a certain distance each frame and drift horizontally due to wind.
	•	show(): Uses ellipse() to draw the snowflake (as a circle) and sets it to semi-transparent white.
	•	offScreen(): Checks if the snowflake has moved off the bottom of the canvas. If it has, it returns true; otherwise, it returns false.

1.1.2:  How the Particle System Works:

In the draw() function, snowflakes are created, updated, and drawn. Each frame checks if the snowflake has moved off the canvas, and if it has, the snowflake is removed. The Snowflake class acts as the particle, with each snowflake being an independent particle that has its own position, size, speed, and drift.
