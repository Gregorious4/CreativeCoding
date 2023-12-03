var characterX = 400
var characterY = 700

var w = 87
var s = 83
var a = 65
var d = 68

var obX[];
var obY[];

var randomMovement[];

var movement[];

var mouseShapeX;
var mouseShapeY;

function drawCharacter() {
    circle(characterX, characterY, 10);
}

function characterMovement() {
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
}

function obstacles() {
    obX[0] = 190
    obX[6] = 10
    obY[0] = 10
    obY[6] = 100

    obX[1] = 600
    obX[7] = 10
    obY[1] = 10
    obY[7] = 100

    obX[2] = 10
    obX[8] = 100
    obY[2] = 500
    obY[8] = 10

    obX[3] = 10
    obX[9] = 100
    obY[3] = 300
    obY[9] = 10

    obX[4] = 10
    obX[10] = 100
    obY[4] = 200
    obY[10] = 10

    obX[5] = 10
    obX[11] = 100
    obY[5] = 400
    obY[11] = 10

    randomMovement[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    randommovement[1] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    randommovement[2] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    randommovement[3] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    randommovement[4] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    randommovement[5] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    movement[0] = 3 + randommovement[0]
    movement[1] = 3 + randommovement[1]
    movement[2] = 3 + randommovement[2]
    movement[3] = 3 + randommovement[3]
    movement[4] = 3 + randommovement[4]
    movement[5] = 3 + randommovement[5]

    rect(obX[0], obY[1], obX[7], obY[7]);
    rect(obX[1], obY[2], obX[8], obY[8]);
    rect(obX[2], obY[3], obX[9], obY[9]);
    rect(obX[3], obY[4], obX[10], obY[10]);
    rect(obX[4], obY[5], obX[11], obY[11]);
    rect(obX[5], obY[6], obX[12], obY[12]);

    obY[0] += movement[0];
    obY[1] += movement[1];
    obX[2] += movement[2];
    obX[3] += movement[3];
    obX[4] += movement[4];
    obX[5] += movement[5];
    
    if (obY[1] >= 690) {
        movement[0] = movement[0] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (obY[1] <= 10) {
        movement[0] = movement[0] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (obY[2] >= 690) {
        movement[1] = movement[1] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (obY[2] <= 10) {
        movement[1] = movement[1] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (obX[3] >= 690) {
        movement[2] = movement[2] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (obX[3] <= 10) {
        movement[2] = movement[2] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (obX[4] >= 690) {
        movement[3] = movement[3] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (obX[4] <= 10) {
        movement[3] = movement[3] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (obX[5] >= 690) {
        movement[4] = movement[4] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (obX[5] <= 10) {
        movement[4] = movement[4] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }

    if (obX[6] >= 690) {
        movement[5] = movement[5] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
    else if (obX[6] <= 10) {
        movement[5] = movement[5] * -1
        fill(random(1, 255), random(1, 255), random(1, 255));
    }
}

function edgeDetection() {
    if (characterX <= 0 || characterX >= 800) {
        characterX = 400;
        characterY = 700;
    }
    if (characterY <= 0 || characterY >= 800) {
        characterX = 400;
        characterY = 700;
    }
}

function winCondition() {
    if ((characterX == 400) && (characterY == 30)) {
        text('YOU WIN', 300, 300);
    }
}

function boardSetup() {
    background(220);
    rect(0, 0, 800, 10);
    rect(790, 0, 800, 800);
    rect(0, 0, 10, 800);
    rect(0, 790, 800, 800);
    circle(400, 30, 10);
    textSize(40);
    text('EXIT', 350, 100);
    drawCharacter();
    obstacles();
    winCondition();
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    drawCharacter();
    characterMovement();
    obstacles();
    edgeDetection();
    winCondition();
    boardSetup();
    winCondition();
    circle(mouseShapeX, mouseShapeY, 40);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}