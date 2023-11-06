function setup() {
    createCanvas(800, 800);
    circlexColor = color(0, 0, 0);
}

var circlex = 300
var circley = 300
var xOne = 400
var xTwo = 800
var ts = 30
var pointx = 300
var pointy = 300

var movementcx = 10
var movementcy = 10
var movementxOne = 10
var movementxTwo = 10
var movementts = 1
var movementpx = 5
var movementpy = 5
var trianglea = 400
var triangleb = 300
var trianglec = 400
var circlexColor = color(10, 10, 10);
var circleyColor = color(10, 10, 10);

function draw() {
    background(200);
    textSize(ts);
    text('My javascript face', 280, 30);
    ellipse(xOne, xTwo, 800, 400);
    ellipse(400, 400, 400, 500);
    circle(circlex, 300, 30);
    circle(500, circley, 30);
    point(pointx, 300);
    point(500, pointy);
    triangle(300, trianglea, 400, triangleb, 500, trianglec);
    rect(300, 500, 200, 10);
    rect(100, 725, 350, 30);
    text('Hello, my name is Greg', 100, 750);
    if (circlex >= 800 || circlex <= 0) {
        movementcx *= -1;
        fill(circlexColor);
    }
    if (circley >= 800 || circley <= 0) {
        movementcy *= -1;
    }
    if (xOne >= 800 || xOne <= 0) {
        movementxOne *= -1;
    }
    if (xTwo >= 800 || xTwo <= 0) {
        movementxTwo *= -1;
    }
    if (ts >= 80 || ts <= 0) {
        movementts *= -1;
    }
    if (pointx >= 800 || pointx <= 0) {
        movementpx *= -1;
    }
    if (pointx >= 800 || pointx <= 0) {
        movementpy *= -1;
    }
    circlex += movementcx;
    circley += movementcy;
    xOne += movementxOne;
    xTwo += movementxTwo;
    ts += movementts;
    pointx += movementpx;
    pointy += movementpy;
    trianglea = random(0, 800);
    triangleb = random(0, 800);
    trianglec = random(0, 800);
}