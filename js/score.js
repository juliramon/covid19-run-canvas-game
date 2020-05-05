function showScore() {
    ctx.font = '18px Nunito';
    ctx.fillStyle = '#82368c';
    let flag = new Image();
    flag.src = './img/flag-points.png';
    ctx.drawImage(flag, 30, 17, 30, 34);
    character.lives > 28 ? ctx.fillText(Math.round(background.frames / 3), 70, 40) : ctx.fillText(Math.round(background.frames / 5), 70, 40);
    let mask = new Image();
    mask.src = './img/face-mask-bar.png';
    ctx.drawImage(mask, 130, 17, 40, 29);
    ctx.fillText(`${Math.ceil(character.lives / 13)} / 3`, 185, 40);
    let docFace = new Image();
    docFace.src = './img/doc-face.png';
    ctx.drawImage(docFace, 250, 17, 40, 29);
    ctx.fillText(`${playerName}`, 300, 40);
    if (character.lives > 28) {
        let mask = new Image();
        mask.src = './img/timer.png';
        ctx.drawImage(mask, 605, 18, 30, 31);
        ctx.font = '55px Nunito';
        ctx.fillText(Math.round(counter / 60), 650, 55);
    }
};

function increaseDifficulty() {
    let checkPoints = [
        [100, 300, 500],
        [700, 1000, 1500, 2000]
    ];
    checkPoints[0].forEach(cp => {
        if (background.frames / 5 === cp) {
            console.log('cp L1');
            obstacles.frequency -= 1000;
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    });
    checkPoints[1].forEach(cp => {
        if (background.frames / 5 === cp) {
            console.log('cp L2');
            obstacles.frequency -= Math.floor(Math.random() * (1000 - 100 + 1) + 100);
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    })
};