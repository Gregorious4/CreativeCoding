var characterX = 500
var characterY = 500

var w = 87
var s = 83
var a = 65
var d = 68

var mouseShapeX;
var mouseShapeY;

var shootRange = 5
var moveSpeed = 5
var bulletSpeed = 5

var bulletX = 500
var bulletY = 500

var hasFired = false;
let timer = 500;
let nextChange = timer; //syncs the timer and change rate

function boardSetup() {
    background(220);
    rect(0, 0, 10000, 10);
    rect(9990, 0, 10000, 10000);
    rect(0, 0, 10, 10000);
    rect(0, 9990, 10000, 10000);
}

function drawCharacter() {
    rect(characterX, characterY, 30, 30);
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY = characterY - moveSpeed;
    }
    if (keyIsDown(s)) {
        characterY = characterY + moveSpeed;
    }
    if (keyIsDown(a)) {
        characterX = characterX - moveSpeed;
    }
    if (keyIsDown(d)) {
        characterX = characterX + moveSpeed;
    }
}

function edgeDetection() {
    if (characterX <= 0 || characterX >= 10000) {
        characterX = 5000;
        characterY = 5000;
    }
    if (characterY <= 0 || characterY >= 10000) {
        characterX = 5000;
        characterY = 5000;
    }
}

function setup() {
    createCanvas(10000, 10000);
    enemyX[1] = Math.random() * 10000
    enemyY[1] = Math.random() * 10000
    enemyX[2] = Math.random() * 10000
    enemyY[2] = Math.random() * 10000
}
function draw() {
    boardSetup();
    drawCharacter();
    characterMovement();
    edgeDetection();
    shoot();
    line(bulletX, bulletY, mouseShapeX, mouseShapeY);
    // ^ this is just to help me visualize the bullet
    createEnemy();
    enemyMovement();

    if (hasFired) {
        shoot();
        line(bulletX, bulletY, mouseShapeX, mouseShapeY);
        // ^ this is just to help me visualize the bullet
    }
    if (millis() > nextChange) {
        hasFired = false;
        nextChange = millis() + timer;
    }
}

function mouseClicked() {

    if (!hasFired) {
        hasFired = true;
        bulletX = characterX + 15;
        bulletY = characterY + 15;
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
        nextChange = millis() + timer;
    }


}

function shoot() {
    if (mouseShapeX > characterX & mouseShapeY > characterY)
        if (mouseShapeX - characterX > mouseShapeY - characterY)
            shootRight();
        else shootDown();
    if (mouseShapeX > characterX & mouseShapeY < characterY)
        if (mouseShapeX - characterX > characterY - mouseShapeY)
            shootRight();
        else shootUp();
    if (mouseShapeX < characterX & mouseShapeY > characterY)
        if (characterX - mouseShapeX > mouseShapeY - characterY)
            shootLeft();
        else shootDown();
    if (mouseShapeX < characterX & mouseShapeY < characterY)
        if (characterX - mouseShapeX > characterY - mouseShapeY)
            shootLeft();
        else shootUp();
}

function shootUp() {
    circle(bulletX, bulletY, 3);
    bulletY = bulletY - bulletSpeed;
}

function shootDown() {
    circle(bulletX, bulletY, 3);
    bulletY = bulletY + bulletSpeed;
}

function shootLeft() {
    circle(bulletX, bulletY, 3);
    bulletX = bulletX - bulletSpeed;
}

function shootRight() {
    circle(bulletX, bulletY, 3);
    bulletX = bulletX + bulletSpeed;
}

var enemy = [];

var enemyX = [];
var enemyY = [];

function createEnemy() {
    enemy[1] = rect(enemyX[1], enemyY[1], 30, 30);
    enemy[2] = rect(enemyX[2], enemyY[1], 30, 30);
}

enemyMove = [];

var moveFrequency = 20

function enemyMovement() {
    enemyMove[1] = Math.random() * moveFrequency
    enemyMove[2] = Math.random() * moveFrequency



    if (enemyMove[1] <= 1)
        for (var i = 0; i < moveSpeed; i++) {
            enemyX[1] = enemyX[1] - moveSpeed
        }
    if (enemyMove[1] <= 2 & enemyMove[1] > 1)
        for (var i = 0; i < moveSpeed; i++) {
            enemyX[1] = enemyX[1] + moveSpeed
        }
    if (enemyMove[1] <= 3 & enemyMove[1] > 2)
        for (var i = 0; i < moveSpeed; i++) {
            enemyY[1] = enemyY[1] - moveSpeed
        }
    if (enemyMove[1] <= 4 & enemyMove[1] > 3)
        for (var i = 0; i < moveSpeed; i++) {
            enemyY[1] = enemyY[1] + moveSpeed
        }

    if (enemyMove[2] <= 1)
        for (var i = 0; i < moveSpeed; i++) {
            enemyX[2] = enemyX[2] - moveSpeed
        }
    if (enemyMove[2] <= 2 & enemyMove[2] > 1)
        for (var i = 0; i < moveSpeed; i++) {
            enemyX[2] = enemyX[2] + moveSpeed
        }
    if (enemyMove[2] <= 3 & enemyMove[2] > 2)
        for (var i = 0; i < moveSpeed; i++) {
            enemyY[2] = enemyY[2] - moveSpeed
        }
    if (enemyMove[2] <= 4 & enemyMove[2] > 3)
        for (var i = 0; i < moveSpeed; i++) {
            enemyY[2] = enemyY[2] + moveSpeed
        }
}


function enemyAttack() {
    if (enemyX[1] = enemyX[2])
        enemyShootX
    if (enemyY[1] = enemyY[2])
        enemyShootY
}

var enemyBulletX = [];
var enemyBulletY = [];

enemyBulletX[1] = enemyX[1]
enemyBulletY[1] = enemyY[1]
enemyBulletX[2] = enemyX[2]
enemyBulletY[2] = enemyY[2]

function enemyShootX() {
    circle(enemyBulletX[1], enemyBulletY[1], 3)
    enemyBulletX[1] = enemyBulletX[1] + bulletSpeed
    circle(enemyBulletX[2], enemyBulletX[2], 3)
    enemyBulletX[2] = enemyBulletX[2] - bulletSpeed
}

function enemyShootY() {
    circle(enemyBulletX[1], enemyBulletY[1], 3)
    enemyBulletY[1] = enemyBulletY[1] + bulletSpeed
    circle(enemyBulletX[2], enemyBulletX[2], 3)
    enemyBulletY[2] = enemyBulletY[2] - bulletSpeed
}