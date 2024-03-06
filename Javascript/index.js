let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mouse = {
    x: undefined,
    y: undefined
};
let x = canvas.width / 2;
let y = canvas.height / 2;

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

function randomIntFromRange(min, max) {
    //Random number for height and width 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("resize", function() {
    //To resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function randomColor(colors) {
    // Random color function
    return colors[Math.floor(Math.random() * colors.length)];
}

function GetDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function Circle() {
    let radius = 100;
    let radiusMouse = 50;

    function draw() {
        c.beginPath();
        c.fillStyle = "black";
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();
        return c;
    }

    function circleMouse() {
        c.beginPath();
        c.fillStyle = "red";
        c.arc(mouse.x, mouse.y, radiusMouse, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();
    }

    function update() {
        draw();
        circleMouse();
    }

    return {
        draw: draw,
        update: update,
        radius: radius,
        radiusMouse: radiusMouse
    };
}

let circle = Circle();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circle.update();

    if (GetDistance(x, y, mouse.x, mouse.y) < circle.radius + circle.radiusMouse) {
        let BigC=circle.draw();
        BigC.fillStyle="red"
        BigC.fill();
    }
}
animate();
