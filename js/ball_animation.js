var canvas = document.getElementById('my_canvas'),
c = canvas.getContext('2d');

(function() {
    

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here
        console.log("Hello")
        //create te container that will hold the boincing balls.
        var container = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
        };
        //create the array of circles that will be animated
        var circles = [{
        x: 170,
        y: 250,
        r: 100,
        vx: 1,
        vy: 1,
        color: 125
        }, {
        x: 150,
        y: 200,
        r: 80,
        vx: 15,
        vy: 8,
        color: 205
        }, {
        x: 90,
        y: 150,
        r: 50,
        vx: 5,
        vy: 15,
        color: 25
        }, {
        x: 190,
        y: 500,
        r: 150,
        vx: 8,
        vy: 10,
        color: 100
        }];

        function animate() {
        //draw the container
        c.fillStyle = "#FFFFFF";
        c.fillRect(container.x, container.y, container.width, container.height);

        //loop throughj the circles array
        for (var i = 0; i < circles.length; i++) {
            //draw the circles
            c.fillStyle = 'hsl(' + circles[i].color++ + ', 100%, 50%)';
            c.beginPath();
            c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
            c.fill()

            //time to animate our circles ladies and gentlemen.
            if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
            circles[i].vx = -circles[i].vx;
            }

            if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
            circles[i].vy = -circles[i].vy;
            }

            circles[i].x += circles[i].vx
            circles[i].y += circles[i].vy
        }

        requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);

    }
})();

canvas.addEventListener('click', () => {
    console.log('canvas click');
 });

