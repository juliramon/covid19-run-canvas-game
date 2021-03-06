function showScore() {
    ctx.font = '18px Nunito';
    ctx.fillStyle = '#82368c';
    ctx.drawImage(sprite, 638, 275, 30, 33.78, 30, 17, 30, 34);
    ctx.fillText(Math.floor(background.frames / 5), 70, 40);
    ctx.drawImage(sprite, 708, 277, 40, 29, 130, 17, 40, 29);
    ctx.fillText(`${Math.ceil(character.lives / 13)} / 3`, 185, 40);
    ctx.drawImage(sprite, 668, 277, 40.48, 28.99, 250, 17, 40, 29);
    ctx.fillText(localStorage.getItem('playerName'), 300, 40);
    if (character.lives > 28) {
        ctx.font = '55px Nunito';
        ctx.drawImage(sprite, 748, 276, 29.82, 31, 605, 18, 30, 31);
        ctx.fillText(Math.round(counter / 60), 650, 55);
    }
};

function getHighestScore() {
    let score = Math.floor(background.frames / 5);
    highestScore = localStorage.highestScore ? localStorage.highestScore : 0;

    if (score > highestScore) {
        highestScore = localStorage.highestScore = score;
    }

    return highestScore;
};

function increaseDifficulty() {
    let checkPoints = [
        [100, 300, 500],
        [700, 1000, 1500, 2000]
    ];
    checkPoints[0].forEach(cp => {
        if (background.frames / 5 === cp) {
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
            obstacles.frequency -= Math.floor(Math.random() * (1000 - 100 + 1) + 100);
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    })
};