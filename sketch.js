// define constants related to the program
const BACKGROUND_CLR = "#FFD4CA";
const BUBBLE_CLR = "#B084CC";

// represents a bouncy ball in the application
class Ball {

    // initialise a new ball object
    constructor(x, y, diam, direction, speed) {
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.direction = direction;
        this.speed = speed;
    }

    // draw the ball to the screen
    draw() {
        circle(this.x, this.y, this.diam);
        this.move();
    }

    // move the ball
    move() {

        // update the ball's coordinates
        this.x += this.getDx();
        this.y += this.getDy();

        // check for horizontal wall bounces and update direction
        if (this.x <= this.diam / 2 || this.x >= width - this.diam / 2) {
            this.direction = Math.PI - this.direction;
        }

        // check for vertical wall bounces and update direction
        if (this.y <= this.diam / 2 || this.y >= height - this.diam / 2) {
            this.direction = -this.direction;
        }
    }

    // get the x-component of the direction of the ball
    getDx() {
        return Math.cos(this.direction) * this.speed;
    }

    // get the y-component of the direction of the ball
    getDy() {
        return Math.sin(this.direction) * this.speed;
    }
}

// store our balls in an array - initialise them in the setup function
const balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // use a for loop to initilise the balls
    for(let i = 1; i <= 10; i ++) {
        balls.push(new Ball(width/2, height/2, 10 * i, i * Math.PI / 5, 11 - i))
    }
}

function draw() {
    // draw the background
    background(BACKGROUND_CLR);

    // prepare to draw th balls
    fill(BUBBLE_CLR); noStroke();

    // draw the balls
    balls.forEach(ball => {
        ball.draw()
    })
}
