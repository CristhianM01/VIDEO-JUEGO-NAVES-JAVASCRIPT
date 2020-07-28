/* VARIABLES */
const IniciarGame = document.querySelector('div.IniciarGame');

/* EVENTOS */
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 80) {
        IniciarGame.style.display = 'none';
        initCanvas()
    }
});

/* FUNCIONES */
function initCanvas() {
    var ctx = document.getElementById('My_Canvas').getContext('2d');
    let PuntajeSuma = 0;
    var naveImage = new Image();
    var enemiespic1 = new Image();
    var enemiespic2 = new Image();


    naveImage.src = "img/Navex.gif";
    enemiespic1.src = "img/Enemigo.png";
    enemiespic2.src = "img/enemigo2.png";

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;

    /
    var enemyTemplate = function(options) {
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }

    var enemies = [

        /* PRIMERA LINEA MOBS */
        new enemyTemplate({ id: "enemy1", x: 150, y: 50, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy2", x: 250, y: 50, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy3", x: 350, y: 50, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy4", x: 450, y: 50, w: 50, h: 50 }),

        new enemyTemplate({ id: "enemy5", x: 150, y: 120, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy6", x: 250, y: 120, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy7", x: 350, y: 120, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy8", x: 450, y: 120, w: 50, h: 50 }),

        new enemyTemplate({ id: "enemy9", x: 150, y: 190, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy10", x: 250, y: 190, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy11", x: 350, y: 190, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy12", x: 450, y: 190, w: 50, h: 50 }),


        /* SEGUNDA LINEA MOBS */
        new enemyTemplate({ id: "enemy13", x: 50, y: -150, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy14", x: 150, y: -150, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy15", x: 250, y: -150, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy16", x: 350, y: -150, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy17", x: 450, y: -150, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy18", x: 550, y: -150, w: 50, h: 50 }),


        /* TERCERA LINEA MOBS */
        new enemyTemplate({ id: "enemy19", x: 300, y: -360, w: 50, h: 50 }),

        new enemyTemplate({ id: "enemy20", x: 230, y: -420, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy21", x: 300, y: -420, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy22", x: 370, y: -420, w: 50, h: 50 }),

        new enemyTemplate({ id: "enemy23", x: 160, y: -480, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy24", x: 230, y: -480, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy25", x: 300, y: -480, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy26", x: 370, y: -480, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy27", x: 440, y: -480, w: 50, h: 50 }),

        new enemyTemplate({ id: "enemy28", x: 90, y: -540, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy29", x: 160, y: -540, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy30", x: 230, y: -540, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy31", x: 300, y: -540, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy32", x: 370, y: -540, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy33", x: 440, y: -540, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy34", x: 510, y: -540, w: 50, h: 50 }),

        new enemyTemplate({ id: "enemy35", x: 20, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy36", x: 90, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy37", x: 160, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy38", x: 230, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy39", x: 300, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy40", x: 370, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy41", x: 440, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy42", x: 510, y: -600, w: 50, h: 50 }),
        new enemyTemplate({ id: "enemy43", x: 580, y: -600, w: 50, h: 50 }),

        /* CUARTA LINEA MOBS */
        new enemyTemplate({ id: "enemy44", x: 50, y: -890, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy45", x: 150, y: -890, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy46", x: 250, y: -890, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy47", x: 350, y: -890, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy48", x: 450, y: -890, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy49", x: 450, y: -890, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy50", x: 550, y: -890, w: 50, h: 50, image: enemiespic2 }),

        new enemyTemplate({ id: "enemy51", x: 50, y: -960, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy52", x: 150, y: -960, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy53", x: 250, y: -960, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy54", x: 350, y: -960, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy55", x: 450, y: -960, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy56", x: 450, y: -960, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy57", x: 550, y: -960, w: 50, h: 50, image: enemiespic2 }),

        new enemyTemplate({ id: "enemy58", x: 150, y: -1030, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy59", x: 250, y: -1030, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy60", x: 350, y: -1030, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy61", x: 450, y: -1030, w: 50, h: 50, image: enemiespic2 }),

        new enemyTemplate({ id: "enemy62", x: 150, y: -1100, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy63", x: 250, y: -1100, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy64", x: 350, y: -1100, w: 50, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy65", x: 450, y: -1100, w: 50, h: 50, image: enemiespic2 }),
    ];


    var renderEnemies = function(enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            var enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y += .3, enemy.w, enemy.h);
            launcher.hitDetectLowerlevel(enemy);
        }
    }

    function Launcher() {
        this.y = 530,
            this.x = cW * .43,
            this.w = 100,
            this.h = 100,
            this.direccion,
            this.bg = "white",
            this.misiles = [];

        /* STATUS DEL GAME */
        this.gameStatus = {
            over: false,
            message: "",
            fillStyle: 'red',
            font: 'italic bold 36px Arial, sans-serif',
        }

        this.render = function() {
            if (this.direccion === 'left') {
                this.x -= 3;
            } else if (this.direccion === 'right') {
                this.x += 3;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(naveImage, this.x, this.y, 100, 100);

            for (var i = 0; i < this.misiles.length; i++) {
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y -= 3, m.w, m.h);
                this.hitDetect(m, i);
                if (m.y <= 0) {
                    this.misiles.splice(i, 1);
                }
            }
            if (enemies.length === 0) {
                clearInterval(animateInterval);
                ctx.fillStyle = 'yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('GANASTE!', cW * .5 - 80, 50);
            }

        }

        this.hitDetect = function(m, mi) {


            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if (m.x + m.w >= e.x &&
                    m.x <= e.x + e.w &&
                    m.y >= e.y &&
                    m.y <= e.y + e.h) {
                    this.misiles.splice(this.misiles[mi], 1);
                    enemies.splice(i, 1);
                    PuntajeSuma += 50;
                    document.getElementById('Puntaje').innerHTML = PuntajeSuma;
                }
            }
        }
        this.hitDetectLowerlevel = function(enemy) {
            if (enemy.y > 470) {
                this.gameStatus.over = true;
                this.gameStatus.message = 'Enemigo paso';
            }
            if (this.gameStatus.over === true) {
                clearInterval(animateInterval);
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;
                ctx.fillText(this.gameStatus.message, cW * .5 - 50, 50);
            }
        }
    }

    var launcher = new Launcher();

    function animate() {
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies)
    }

    var animateInterval = setInterval(animate, 6);

    /* CONTROLES DE LA NAVE */
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 65) {
            launcher.direccion = 'left';

        }
    });

    document.addEventListener('keydown', function(e) {

        if (e.keyCode === 68) {
            launcher.direccion = 'right';

        }
    });

    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 65) {
            launcher.x += 0;
            launcher.direccion = '';
        }
    });


    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 68) {
            launcher.x -= 0;
            launcher.direccion = '';
        }
    });

    /* DISPARO */
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 32) {
            launcher.misiles.push({ x: launcher.x + launcher.w * .5, y: launcher.y, w: 3, h: 10 });
        }
    });


}