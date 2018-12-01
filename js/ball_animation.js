var canvas = document.getElementById('my_canvas'),
c = canvas.getContext('2d');

var circles = [{
    x: 170,
    y: 150,
    r: 100,
    vx: 1.5,
    vy: 1.5,
    color: 155,
    lifeLength: 11
    },
    {
    x: 70,
    y: 400,
    r: 40,
    vx: 2,
    vy: 1.7,
    color: 125,
    lifeLength: 8
    },
    {
      x: 40,
      y: 700,
      r: 30,
      vx: 2.4,
      vy: 1.9,
      color: 100,
      lifeLength: 6
      },
      {
        x: 900,
        y: 700,
        r: 33,
        vx: 2.1,
        vy: 1.8,
        color: 155,
        lifeLength: 7
        }];

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

            for (var n = 0; n < circles.length; n++) {
                for (var k = 0; k < circles.length; k++) {
                    if (circles[i] != circles[k]) {
                        if (((circles[i].x - circles[k].x) ** 2 + (circles[i].y - circles[k].y) ** 2) <= (circles[i].r + circles[k].r) ** 2) {
                          if (circles[i].vx > circles[k].vx) {
                            circles[k].vx = -circles[k].vx;
                          } else if (circles[k].vx > circles[i].vx) {
                            circles[i].vx = -circles[i].vx;
                          } else {
                            circles[i].vx = -circles[i].vx;
                            circles[k].vx = -circles[k].vx;
                          }
                          
                          if (circles[i].vy > circles[k].vy) {
                            circles[k].vy = -circles[k].vy;
                          } else if (circles[k].vy > circles[i].vy) {
                            circles[i].vy = -circles[i].vy;
                          } else {
                            circles[i].vy = -circles[i].vy;
                            circles[k].vy = -circles[k].vy;
                          }
                      } 
                    }
                }
            }

            circles[i].x += circles[i].vx
            circles[i].y += circles[i].vy

            //time to make the circles disappear over time ladies and gentlemen
            circles[i].lifeLength -= 1 / 60


            if (circles[i].lifeLength <= 0) {
                circles[i].r = circles[i].r * (1 / 1.5);
            }

            if (circles[i].lifeLength <= -1) {
                circles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);

    }
})();

function isIntersect(point, circle) {
    return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.r;
  }
  
  canvas.addEventListener('click', (e) => {
    const pos = {
      x: e.clientX,
      y: e.clientY
    };

    circles.forEach(circle => {
      if (isIntersect(pos, circle)) {
        circles.splice(circles.indexOf(circle), 1);
      }
    });
  });