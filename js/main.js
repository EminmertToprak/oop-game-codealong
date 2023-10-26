console.log('js loaded....');

class Player {
	constructor() {
		this.height = 14;
		this.width = 16;
		this.positionX = 50 - this.width / 2;
		this.positionY = 0;
		this.playerElm = document.getElementById('player');

		this.playerElm.style.width = this.width + 'vw';
		this.playerElm.style.height = this.height + 'vh';

		this.playerElm.style.bottom = this.positionY + 'vh';
		this.playerElm.style.left = this.positionX + 'vw';
	}
	moveLeft() {
		this.positionX--;
		this.playerElm.style.left = this.positionX + 'vw';
	}
	moveRight() {
		this.positionX++;
		this.playerElm.style.left = this.positionX + 'vw';
	}
}

class Obstacle {
	constructor() {
		this.height = 10;
		this.width = 10;
		this.positionX = Math.floor(Math.random() * 100 - this.width);
		this.positionY = 100;
		this.createObstacle = undefined;

		this.createDomElement();
	}
	createDomElement() {
		/// creating new element
		this.createObstacle = document.createElement('div');

		// add created element
		this.createObstacle.classList.add('obstacle');
		this.createObstacle.style.width = this.width + 'vw';
		this.createObstacle.style.height = this.height + 'vh';
		this.createObstacle.style.left = this.positionX + 'vw';
		this.createObstacle.style.bottom = this.positionY + 'vh';

		// append to the dom: `parentElm.appendChild()`
		const parentElm = document.getElementById('board');
		parentElm.appendChild(this.createObstacle);
	}
	moveDown() {
		this.positionY--;
		this.createObstacle.style.bottom = this.positionY + 'vh';
	}
}

const player = new Player();

const obstaclesArray = [];

//create obstacles
setInterval(() => {
	const newObstacle = new Obstacle();
	obstaclesArray.push(newObstacle);
}, 2000);

//move obstacles (ex. every XXX ms, move all the obstacles that we have in the array)
setInterval(() => {
	obstaclesArray.forEach((obstacleInstance) => {
		obstacleInstance.moveDown();
	});
}, 50);

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
