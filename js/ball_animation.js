var canvas = document.getElementById('my_canvas'),
c = canvas.getContext('2d');
c.font="20px Arial";

var manyText=["Stresstålig", "Glad", "Deprimerad", "Optimistisk", "Sjuk i huvudet"];

var soundString=["fart1.wav","swosh1.flac","swosh2.mp3","swosh3.mp3","swosh2.mp3","swosh1.flac"];

var circles = [];


for (var x=0; x<5;x++ ){
    addCircle(x);

}

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

            c.beginPath();
            c.fillStyle='hsl(0,0%,0%)';
            c.font="20px Arial";
            c.fillText(circles[i].text, circles[i].x-circles[i].r/2, circles[i].y+5);
            c.fill();

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

function addCircle(x) {
  var circle = {
      text: manyText[x],
      x: 200 + 500 * Math.random(),
      y: 200 + 500 * Math.random(),
      r: c.measureText(manyText[x]).width, //manyText[x].length*6+20, // + 10 * Math.random(),
      color: 360 * Math.random(),
      vx: 2 * Math.random(),
      vy: 2 * Math.random(),
      lifeLength: 6 + 4 * Math.random()
  };
  console.log(circle.text.length+" hejhej");
  circles.push(circle);
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }
}



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
        var circleSound=new sound(soundString[Math.floor(6*Math.random())]);
        circleSound.play();
      }
    });
  });

  