console.log('js loaded....');

const player = new Player();
const obstaclesArray = [];

//create obstacles
setInterval(() => {
	const newObstacle = new Obstacle();
	obstaclesArray.push(newObstacle);
}, 1000);

//update obstacles
setInterval(() => {
	obstaclesArray.forEach((obstacleInstance) => {
		//move obstacles (ex. every XXX ms, move all the obstacles that we have in the array)
		obstacleInstance.moveDown();

		//remove obstacles if outside
		if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
			//remove dom element
			obstacleInstance.createObstacle.remove();
			console.log('removed');
			//remove from the array
			obstaclesArray.shift();
		}

		//detect collision
		if (
			player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
			player.positionX + player.width > obstacleInstance.positionX &&
			player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
			player.positionY + player.height > obstacleInstance.positionY
		) {
			// Collision detected!
			console.log('Game Over');
			location.href = './game_over.html';
		}
	});
}, 50);

// attach event listeners
document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowLeft':
			player.moveLeft();
			break;
		case 'ArrowRight':
			player.moveRight();
			break;
	}
});
