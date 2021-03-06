let background = {
    img: new Image(),
    x: 0,
    width: canvas.width,
    height: canvas.height,
    speed: -2,
    frames: 0,
    move: function () {
        this.x += this.speed;
        this.x %= canvas.width;
    },
    show: function () {
        this.img.src = './img/bg-game.png';
        ctx.drawImage(this.img, this.x, 0);
        ctx.drawImage(this.img, this.x - this.img.width + 1, 0);
        this.x += this.speed;
        this.x <= 0 ? this.x = canvas.width : null;
    }
};