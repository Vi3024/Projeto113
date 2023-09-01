function preload(){
}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(600, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 800, 600);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 50, 100);
    circle(750, 50, 100);
    circle(650, 50, 100);
    circle(550, 50, 100);
    circle(450, 50, 100);
    circle(350, 50, 100);
    circle(250, 50, 100);
    circle(150, 50, 100);
    fill(0, 250, 0);
    stroke(0, 250, 0);
    circle(50, 150, 100);
    circle(50, 250, 100);
    circle(50, 350, 100);
    circle(50, 450, 100);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(150, 550, 100);
    circle(750, 550, 100);
    circle(650, 550, 100);
    circle(550, 550, 100);
    circle(450, 550, 100);
    circle(350, 550, 100);
    circle(250, 550, 100);
    circle(50, 550, 100);
    fill(0, 250, 0);
    stroke(0, 250, 0);
    circle(750, 150, 100);
    circle(750, 250, 100);
    circle(750, 350, 100);
    circle(750, 450, 100);
}

function takeSnapshot() {
    save('fotopersonalizada.png');
}