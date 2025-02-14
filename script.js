function loadCSS(filename) {
    const link = document.getElementById('theme-stylesheet');
    link.href = filename;
}
function cleanupPreviousTheme() {
    // Remove any dynamically added hearts from the body
    const hearts = document.querySelectorAll('.hearts');
    hearts.forEach(heart => heart.remove());
    
    // Reset any body styles if needed
    document.body.style.position = '';
}
function loadHTML(theme) {
    cleanupPreviousTheme();
    const container = document.getElementById('theme-container');
    const userName = localStorage.getItem("userName") || "Valentine"
    
    if (theme === 'theme1') {
        container.innerHTML = `
            <div class="happy-valentines">
                <div class="valentines-day-card">
                    <div class="clouds"></div>
                    <div class="hearts">
                        <div class="heartOne">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartTwo">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartThree">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartFour">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartFive">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                    </div>
                    <div class="text"><span>Happy Valentine's<br> Day ${userName}!</span></div>
                </div>
                <p class="hover">- hover over the text -</p>
            </div>
        `;
    } else if (theme === 'theme2') {
        container.innerHTML = `
            <div class="alternative-theme">
                <div class="container">  
                    <div class="valentines">
                        <div class="envelope"></div>
                        <div class="front"></div>
                        <div class="card">
                            <div class="text">Happy</br> Valentine's</br> Day ${userName}!</div>
                            <div class="heart"></div>
                        </div>
                        <div class="hearts">
                            <div class="one"></div>
                            <div class="two"></div>
                            <div class="three"></div>
                            <div class="four"></div>
                            <div class="five"></div>
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </div>
        `;
    
        // Attach event listeners directly after inserting the HTML
        const containerElement = container.querySelector('.container');
        const cardElement = container.querySelector('.card');
    
        if (containerElement && cardElement) {
            containerElement.addEventListener('mouseenter', function () {
                cardElement.style.transition = 'top 0.5s'; // Smooth transition
                cardElement.style.top = '-90px'; // Move card up
            });
    
            containerElement.addEventListener('mouseleave', function () {
                cardElement.style.transition = 'top 0.5s'; // Smooth transition
                cardElement.style.top = '0'; // Move card back to original position
            });
        }
    }else if (theme === 'theme3') {
        // Add HTML for Theme 3
        container.innerHTML = `
          
            <div class="wrapper">
                <div class="content">
                    <button class="heart">SPREAD THE LOVE ${userName}!</button>
                </div>
            </div>
        `;
    
        setTimeout(() => {
            // Ensure body is positioned relative for absolute positioning of hearts
            document.body.style.position = 'relative';
        
            var heartBtn = document.querySelector('.heart'); // The "SPREAD LOVE" button
            var TOTAL = 300;
            var hearts = [];
        
            var Heart = function() {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.vx = 0;
                this.vy = 0;
                this.vz = 0;
                this.speed = 1;
                this.angle = 0;
                this.div = document.createElement('div');
                this.div.classList.add('hearts');
                // Force absolute positioning for proper placement
                this.div.style.position = 'absolute';
            };
        
            Heart.prototype.move = function() {
                this.x += this.vx * this.speed;
                this.y += this.vy * this.speed;
                this.z += this.vz * this.speed;
                this.div.style.transform = this.div.style.webkitTransform = this.getTransform();
            };
        
            Heart.prototype.setSize = function(width, height) {
                this.div.style.width = width + 'px';
                this.div.style.height = height + 'px';
            };
        
            Heart.prototype.getTransform = function() {
                return 'translate3d(' + this.x + 'px, ' + this.y + 'px, ' + this.z + 'px) rotateZ(' + this.angle + 'deg)';
            };
        
            function addHeart(g) {
                document.body.appendChild(g.div);
                hearts.push(g);
            }
        
            function removeHearts() {
                for (var i = hearts.length; i--; ) {
                    document.body.removeChild(hearts[i].div);
                }
                hearts = [];
            }
        
            function createHearts(total, x, y) {
                // Create a group of hearts starting at (x, y)
                for (var i = total; i--; ) {
                    var b = new Heart();
                    b.x = (x !== undefined) ? x : window.innerWidth / 2;
                    b.y = (y !== undefined) ? y : window.innerHeight / 2;
                    var v = Math.random() * Math.PI * 2;
                    b.vx = Math.cos(v);
                    b.vy = Math.sin(v);
                    b.vz = Math.random() * 4 - 2;
                    var speed = Math.random() * 2 + 0.1;
                    b.speed = speed * speed;
                    b.angle = Math.random() * 360;
                    b.setSize(Math.random() * 23 + 2, Math.random() * 13 + 2);
                    addHeart(b);
                }
            }
        
            function update() {
                requestAnimationFrame(update);
                for (var i = hearts.length; i--; ) {
                    hearts[i].move();
                }
            }
        
            // New function: initialize hearts on both left and right sides
            function initSides() {
                removeHearts();
                // Spawn half the hearts on the left-center (25% of window width)
                createHearts(TOTAL / 2, window.innerWidth * 0.25, window.innerHeight / 2);
                // Spawn half the hearts on the right-center (75% of window width)
                createHearts(TOTAL / 2, window.innerWidth * 0.75, window.innerHeight / 2);
            }
        
            // Button click reinitializes the hearts on both sides
            if (heartBtn) {
                heartBtn.addEventListener('click', function() {
                    initSides();
                });
            }
        
            // Start the animation from both sides after a short delay
            setTimeout(function() {
                update();
                initSides();
            }, 200);
        }, 0);
        
    } else if (theme === 'theme4')  {
        container.innerHTML = `
            <div class="gif-container">
                <img src="https://media1.tenor.com/m/SSY2V0RrU3IAAAAd/rick-roll-rick-rolled.gif" alt="Rick Roll" />
            </div>
        `;
    } else if (theme === 'theme5'){
        container.innerHTML = `
         <div class="image-container">
                <img src="https://ih1.redbubble.net/image.4146804179.0047/fposter,small,wall_texture,square_product,1000x1000.jpg" />
                 <div class="speech-bubble">
    Axe says - Happy Valentine's Day!
  </div>
            </div>
        `
    }}
    // Thanks to @neave

// Thanks to @neave


