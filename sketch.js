let snowflakes = []; // Array to store snowflakes
let grassImage; // Variable to store the grass image

function preload() {
  // Preload the grass image
  grassImage = loadImage('grass.jpg'); // Replace with your grass image file name
}

function setup() {
  createCanvas(800, 600); // Create a canvas with size 800x600
  noStroke(); // Disable borders
}

function draw() {
  // Use the grass image to cover the entire canvas
  image(grassImage, 0, 0, width, height); // Adjust the image size to cover the entire canvas

  // Create a new snowflake every 5 frames
  if (frameCount % 5 === 0) {
    snowflakes.push(new Snowflake()); // Add a new snowflake to the array
  }

  // Update and display all snowflakes
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    snowflakes[i].update(); // Update the snowflake position
    snowflakes[i].show(); // Display the snowflake

    // If the snowflake goes off-screen, remove it from the array
    if (snowflakes[i].offScreen()) {
      snowflakes.splice(i, 1); // Remove the snowflake from the array
    }
  }
}

// Snowflake class
class Snowflake {
  constructor() {
    this.x = random(width); // Random horizontal position
    this.y = random(-50, 0); // Random initial vertical position (slightly above the canvas)
    this.size = random(2, 8); // Random snowflake size
    this.speed = random(1, 3); // Random falling speed
    this.wind = random(-0.5, 0.5); // Random horizontal wind force
  }

  update() {
    this.y += this.speed; // Snowflake falls down
    this.x += this.wind; // Snowflake drifts horizontally
  }

  show() {
    fill(255, 255, 255, 200); // Snowflake color (white, with slight transparency)
    ellipse(this.x, this.y, this.size); // Draw the snowflake
  }

  offScreen() {
    return this.y > height; // Check if the snowflake has gone off the bottom of the screen
  }
}