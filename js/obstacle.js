class Obstacle {
	constructor() {
		this.height = 10;
		this.width = 10;
		this.positionX = Math.ceil(Math.random() * 100 - this.width);
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
