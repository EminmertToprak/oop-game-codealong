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
