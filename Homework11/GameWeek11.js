var characterX = 400
var characterY = 700

var w = 87
var s = 83
var a = 65
var d = 68

var ob1x1 = 190
var ob1x2 = 10
var ob1y1 = 10
var ob1y2 = 100

var ob2x1 = 600
var ob2x2 = 10
var ob2y1 = 10
var ob2y2 = 100

var ob3x1 = 10
var ob3x2 = 100
var ob3y1 = 500
var ob3y2 = 10

var ob4x1 = 10
var ob4x2 = 100
var ob4y1 = 300
var ob4y2 = 10

var ob5x1 = 10
var ob5x2 = 100
var ob5y1 = 200
var ob5y2 = 10

var ob6x1 = 10
var ob6x2 = 100
var ob6y1 = 400
var ob6y2 = 10

var randomMovement1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
var randomMovement2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
var randomMovement3 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
var randomMovement4 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
var randomMovement5 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
var randomMovement6 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

var movement1 = 3 + randomMovement1
var movement2 = 3 + randomMovement2
var movement3 = 3 + randomMovement3
var movement4 = 3 + randomMovement4
var movement5 = 3 + randomMovement5
var movement6 = 3 + randomMovement6

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(800, 800);
}

function draw() {

    //setup
    background(220);
    rect(0, 0, 800, 10);
    rect(790, 0, 800, 800);
    rect(0, 0, 10, 800);
    rect(0, 790, 800, 800);
    circle(400, 30, 10);
    textSize(40);
    text('EXIT', 350, 100);

    //moving obstacles
    rect(ob1x1, ob1y1, ob1x2, ob1y2);
    rect(ob2x1, ob2y1, ob2x2, ob2y2);
    rect(ob3x1, ob3y1, ob3x2, ob3y2);
    rect(ob4x1, ob4y1, ob4x2, ob4y2);
    rect(ob5x1, ob5y1, ob5x2, ob5y2);
    rect(ob6x1, ob6y1, ob6x2, ob6y2);

    ob1y1 += movement1;
    ob2y1 += movement2;
    ob3x1 += movement3;
    ob4x1 += movement4;
    ob5x1 += movement5;
    ob6x1 += movement6;

    if (ob1y1 >= 690) {
        movement1 = movement1 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (ob1y1 <= 10) {
        movement1 = movement1 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (ob2y1 >= 690) {
        movement2 = movement2 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (ob2y1 <= 10) {
        movement2 = movement2 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (ob3x1 >= 690) {
        movement3 = movement3 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (ob3x1 <= 10) {
        movement3 = movement3 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (ob4x1 >= 690) {
        movement4 = movement4 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (ob4x1 <= 10) {
        movement4 = movement4 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (ob5x1 >= 690) {
        movement5 = movement5 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (ob5x1 <= 10) {
        movement5 = movement5 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (ob6x1 >= 690) {
        movement6 = movement6 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (ob6x1 <= 10) {
        movement6 = movement6 * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    //character
    circle(characterX, characterY, 10);

    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }

    //mouse click
    circle(mouseShapeX, mouseShapeY, 40);

    //win condition
    if ((characterX == 400) && (characterY == 30)) {
        text('YOU WIN', 300, 300);
    }

    //edge detection
    if (characterX <= 0 || characterX >= 800) {
        characterX = 400;
        characterY = 700;
    }
    if (characterY <= 0 || characterY >= 800) {
        characterX = 400;
        characterY = 700;
    }
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}