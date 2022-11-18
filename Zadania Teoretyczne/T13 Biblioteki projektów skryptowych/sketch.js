function setup() {
    createCanvas(400, 400, WEBGL);
}
function draw() {
    background(255);
    rotateX(millis() / 1000);
    rotateY(millis() / 2000);
    rotateZ(millis() / 1000);
    box();
}