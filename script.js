// script.js
document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const enemy = document.getElementById('enemy');
    const gameContainer = document.getElementById('game-container');
    const gameWidth = gameContainer.offsetWidth;
    const gameHeight = gameContainer.offsetHeight;

    const playerSpeed = 5;
    let playerHealth = 100;
    let enemyHealth = 50;

    function movePlayer(event) {
        const playerRect = player.getBoundingClientRect();
        switch(event.key) {
            case 'ArrowUp':
                if (playerRect.top > 0) {
                    player.style.top = player.offsetTop - playerSpeed + 'px';
                }
                break;
            case 'ArrowDown':
                if (playerRect.bottom < gameHeight) {
                    player.style.top = player.offsetTop + playerSpeed + 'px';
                }
                break;
            case 'ArrowLeft':
                if (playerRect.left > 0) {
                    player.style.left = player.offsetLeft - playerSpeed + 'px';
                }
                break;
            case 'ArrowRight':
                if (playerRect.right < gameWidth) {
                    player.style.left = player.offsetLeft + playerSpeed + 'px';
                }
                break;
            case ' ':
                attackEnemy();
                break;
        }
    }

    function attackEnemy() {
        const playerRect = player.getBoundingClientRect();
        const enemyRect = enemy.getBoundingClientRect();

        if (playerRect.right >= enemyRect.left &&
            playerRect.left <= enemyRect.right &&
            playerRect.bottom >= enemyRect.top &&
            playerRect.top <= enemyRect.bottom) {
                enemyHealth -= 10;
                if (enemyHealth <= 0) {
                    enemy.style.backgroundColor = 'gray';
                    console.log('Enemy Defeated!');
                }
                console.log('Enemy Health:', enemyHealth);
        }
    }

    document.addEventListener('keydown', movePlayer);
});