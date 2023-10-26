console.log('js loaded....');

class Player {
	constructor() {
		this.positionX = 45;
		this.positionY = 0;
		this.height = 15;
		this.width = 10;
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

const player = new Player();

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
