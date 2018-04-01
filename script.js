let matrix = [
	[0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, , 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 20, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 20,],
	[1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, , 1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 4, 1, 1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 4, 1,],
	[0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, , 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 1, 4, 4, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 1, 4, 4, 1,],
	[2, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 5, , 2, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 1, 2, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 1,],
	[1, 1, 1, 0, 0, 1, 1, 1, 0, 20, 2, 1, 1, 0, 0, , 1, 1, 1, 0, 0, 1, 1, 1, 0, 20, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 20, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0,],
	[1, 1, 0, 0, 0, 1, 1, 50, 0, 0, 1, 1, 1, 0, 0, , 1, 1, 0, 0, 0, 1, 1, 50, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 50, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0,],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
	[0, 0, 1, 0, 2, 4, 0, 1, 0, 1, 0, 2, 1, 50, 1, 0, 0, 1, 0, 2, 4, 0, 1, 0, 1, 0, 2, 1, 50, 1, 0, 0, 1, 0, 3, 0, 0, 1, 0, 2, 4, 0, 1, 0, 1, 0, 2, 1, 50, 1, 0, 0, 1, 0, 3, 1],
	[1, 0, 0, 0, 4, 4, 4, 0, 0, 0, 1, 20, 0, 2, 0, 1, 0, 0, 0, 4, 4, 4, 0, 0, 0, 1, 20, 0, 2, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 4, 4, 4, 0, 0, 0, 1, 20, 0, 2, 0, 1, 0, 0, 4, 0, 2],
	[0, 1, 1, 0, 1, 20, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 3],
	[2, 0, 1, 0, 5, 1, 0, 1, 0, 4, 1, 1, 1, 1, 50, 2, 0, 1, 0, 5, 1, 0, 1, 0, 4, 1, 1, 1, 1, 50, 1, 0, 1, 0, 5, 2, 0, 1, 0, 5, 1, 0, 1, 0, 4, 1, 1, 1, 1, 50, 1, 0, 1, 0, 50, 4],
	[1, 1, 1, 0, 20, 1, 1, 1, 0, 0, 1, 1, 1, 30, 0, 1, 1, 1, 0, 20, 1, 1, 1, 0, 0, 1, 1, 1, 30, 0, 2, 1, 1, 0, 1, 1, 1, 0, 20, 1, 1, 1, 0, 0, 1, 1, 1, 30, 0, 2, 1, 1, 0, 0, 1, 2],
	[1, 1, 0, 0, 0, 1, 1, 20, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 20, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 20, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 2],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
	[0, 0, 1, 0, 3, 30, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 3, 30, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, 30, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 3, 0],
	[1, 0, 0, 0, 20, 1, 0, 0, 50, 0, 1, 0, 0, 1, 3, 1, 0, 0, 0, 20, 1, 0, 0, 50, 0, 1, 0, 0, 1, 30, 1, 0, 0, 0, 1, 0, 0, 0, 20, 1, 0, 0, 50, 0, 1, 0, 0, 1, 30, 1, 0, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 2, 1, 0, 1, 1, 4, 1, 6, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 2, 1, 0, 1, 1, 4, 1, 1],
	[2, 0, 1, 0, 5, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, , 2, 0, 1, 0, 5, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 2, 0, 1, 0, 3, 2, 0, 1, 0, 5, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 2, 0, 1, 0, 3,],
	[1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 20, 30, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 20, 30, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 20, 30, 1, 1, 1, 0, 0, 1, 1],
	[1, 1, 0, 0, 4, 4, 1, 0, 0, 0, 1, 1, 1, 20, 0, , 1, 1, 0, 0, 4, 4, 1, 0, 0, 0, 1, 1, 1, 20, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 4, 4, 1, 0, 0, 0, 1, 1, 1, 20, 0, 1, 1, 0, 0, 0,],
	[1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 20, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 20, 0],
	[1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 4, 1, 1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 4, 1, 0],
	[0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 1, 4, 4, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 1, 4, 4, 1, 0],
	[2, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 5, 2, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 1, 2, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 5, 1, 0, 1, 0, 1, 0],
	[1, 1, 1, 0, 0, 1, 1, 1, 0, 20, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 20, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 20, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
	[1, 1, 0, 0, 0, 1, 1, 50, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 50, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 50, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 1, 0, 2, 4, 0, 1, 0, 1, 0, 2, 1, 50, 1, 0, 0, 1, 0, 2, 4, 0, 1, 0, 1, 0, 2, 1, 50, 1, 0, 0, 1, 0, 3, 0, 0, 1, 0, 2, 4, 0, 1, 0, 1, 0, 2, 1, 50, 1, 0, 0, 1, 0, 3, 0],
	[1, 0, 0, 0, 4, 4, 4, 0, 0, 0, 1, 20, 0, 2, 0, 1, 0, 0, 0, 4, 4, 4, 0, 0, 0, 1, 20, 0, 2, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 4, 4, 4, 0, 0, 0, 1, 20, 0, 2, 0, 1, 0, 0, 4, 0, 0],
	[0, 1, 1, 0, 1, 20, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
	[2, 0, 1, 0, 5, 1, 0, 1, 0, 4, 1, 1, 1, 1, 50, 2, 0, 1, 0, 5, 1, 0, 1, 0, 4, 1, 1, 1, 1, 50, 1, 0, 1, 0, 5, 2, 0, 1, 0, 5, 1, 0, 1, 0, 4, 1, 1, 1, 1, 50, 1, 0, 1, 0, 50, 0],
	[1, 1, 1, 0, 20, 1, 1, 1, 0, 0, 1, 1, 1, 30, 0, 1, 1, 1, 0, 20, 1, 1, 1, 0, 0, 1, 1, 1, 30, 0, 2, 1, 1, 0, 1, 1, 1, 0, 20, 1, 1, 1, 0, 0, 1, 1, 1, 30, 0, 2, 1, 1, 0, 0, 1, 0],
	[1, 1, 0, 0, 0, 1, 1, 20, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 20, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 20, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
	[0, 0, 1, 0, 3, 30, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 3, 30, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 3, 0, 0, 1, 0, 3, 30, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 3, 0],
	[1, 0, 0, 0, 20, 1, 0, 0, 50, 0, 1, 0, 0, 1, 3, 1, 0, 0, 0, 20, 1, 0, 0, 50, 0, 1, 0, 0, 1, 30, 1, 0, 0, 0, 1, 0, 0, 0, 20, 1, 0, 0, 50, 0, 1, 0, 0, 1, 30, 1, 0, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 2, 1, , 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 2, 1, 0, 1, 1, 4, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 20, 1, 1, 2, 1, 0, 1, 1, 4, 1,],
	[2, 0, 1, 0, 5, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, , 2, 0, 1, 0, 5, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 2, 0, 1, 0, 3, 2, 0, 1, 0, 5, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 2, 0, 1, 0, 3,],
	[1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 20, 30, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 20, 30, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 20, 30, 1, 1, 1, 0, 0, 1, 0]
];

let exanak = "dzmer";
let side = 20;
let grassArr = [];
let xotakerner = [];
let xotakerAxjikner = [];
let gishatichner = [];
let gishatichAxjikner = [];
let vorsordArr = [];
let dinosaurArr = [];
let dinosaurAxjikner = [];
let annormalArr = [];
let boomBool = true;

function deleteCreature(x, y) {
	for (var i in grassArr) {
		if (grassArr[i].x == x && grassArr[i].y == y) {
			grassArr.splice(i, 1);
		}
	}
	for (var i in xotakerner) {
		if (xotakerner[i].x == x && xotakerner[i].y == y) {
			xotakerner.splice(i, 1);
		}
	}
	for (var i in xotakerAxjikner) {
		if (xotakerAxjikner[i].x == x && xotakerAxjikner[i].y == y) {
			xotakerAxjikner.splice(i, 1);
		}
	}
	for (var i in gishatichner) {
		if (gishatichner[i].x == x && gishatichner[i].y == y) {
			gishatichner.splice(i, 1);
		}
	}
	for (var i in gishatichAxjikner) {
		if (gishatichAxjikner[i].x == x && gishatichAxjikner[i].y == y) {
			gishatichAxjikner.splice(i, 1);
		}
	}
	for (let i in vorsordArr) {
		if (vorsordArr[i].x == x && vorsordArr[i].y == y) {
			vorsordArr.splice(i, 1);
		}
	}
	for (let i in dinosaurArr) {
		if (dinosaurArr[i].x == x && dinosaurArr[i].y == y) {
			dinosaurArr.splice(i, 1);
		}
	}
	for (let i in dinosaurAxjikner) {
		if (dinosaurAxjikner[i].x == x && dinosaurAxjikner[i].y == y) {
			dinosaurAxjikner.splice(i, 1);
		}
	}
}

function mouseClicked() {
	if (boomBool) {
		let xMouse = Math.floor(mouseX / side)
		let yMouse = Math.floor(mouseY / side)
		if ((yMouse - 1) >= 0 && (xMouse - 1) >= 0 && (xMouse + 1) < matrix[0].length && (yMouse + 1) < matrix.length) {
			boomBool = false;
			matrix[yMouse][xMouse] = 10;
			matrix[yMouse - 1][xMouse - 1] = 10;
			matrix[yMouse - 1][xMouse] = 10;
			matrix[yMouse - 1][xMouse + 1] = 10;
			matrix[yMouse][xMouse - 1] = 10;
			matrix[yMouse][xMouse + 1] = 10;
			matrix[yMouse + 1][xMouse - 1] = 10;
			matrix[yMouse + 1][xMouse] = 10;
			matrix[yMouse + 1][xMouse + 1] = 10;
			deleteCreature(xMouse, yMouse);
			deleteCreature(xMouse - 1, yMouse - 1);
			deleteCreature(xMouse, yMouse - 1);
			deleteCreature(xMouse + 1, yMouse - 1);
			deleteCreature(xMouse - 1, yMouse);
			deleteCreature(xMouse + 1, yMouse);
			deleteCreature(xMouse - 1, yMouse + 1);
			deleteCreature(xMouse, yMouse + 1);
			deleteCreature(xMouse + 1, yMouse + 1);
			setTimeout(() => {
				for (let y = 0; y < matrix.length; y++) {
					for (let x = 0; x < matrix[y].length; x++) {
						if (matrix[y][x] == 10) {
							matrix[y][x] = 0;
							boomBool = true;
						}

					}

				}
			}, 3000);
		}
	}
}
function setTime() {
	setTimeout(() => { exanak = "garun"; }, 10000);
	setTimeout(() => { exanak = "amar"; }, 20000);
	setTimeout(() => { exanak = "ashun"; }, 30000);
	setTimeout(() => { exanak = "dzmer"; setTime(); }, 40000);
}
function setup() {
	frameRate(5);
	setTime();
	createCanvas(matrix[0].length * side + 200, matrix.length * side);
	line(matrix[0].length * side, 0, matrix[0].length * side, matrix.length * side);
	textSize(30);

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				grassArr.push(new Grass(x, y));
			} else if (matrix[y][x] == 2) {
				xotakerner.push(new Xotaker(x, y));
			} else if (matrix[y][x] == 20) {
				xotakerAxjikner.push(new XotakerAxjik(x, y));
			} else if (matrix[y][x] == 3) {
				gishatichner.push(new Gishatich(x, y));
			} else if (matrix[y][x] == 30) {
				gishatichAxjikner.push(new GishatichAxjik(x, y));
			} else if (matrix[y][x] == 4) {
				vorsordArr.push(new Vorsord(x, y));
			} else if (matrix[y][x] == 5) {
				dinosaurArr.push(new Dinosaur(x, y));
			} else if (matrix[y][x] == 50) {
				dinosaurAxjikner.push(new DinosaurAxjik(x, y));
			} else if (matrix[y][x] == 6) {
				annormalArr.push(new Annormal(x, y));
			}
		}
	}
}

function uxarkel() {
	console.log(`Ծնվեց ${grassBazm} խոտ`); grassBazm = 0;
	console.log(`Մահացավ ${grassMah} խոտ`); grassMah = 0;
	console.log(`Ծնվեց ${xotTxaBazm} արու խոտակեր`); xotTxaBazm = 0;
	console.log(`Մահացավ ${xotTxaMah} արու խոտակեր`); xotTxaMah = 0;
	console.log(`Ծնվեց ${xotAxjikBazm} էգ խոտակեր`); xotAxjikBazm = 0;
	console.log(`Մահացավ ${xotAxjikMah} էգ խոտակեր`); xotAxjikMah = 0;
	console.log(`Ծնվեց ${gishTxaBazm} արու գիշատիչ`); gishTxaBazm = 0;
	console.log(`Մահացավ ${gishTxaMah} արու գիշատիչ`); gishTxaMah = 0;
	console.log(`Ծնվեց ${gishAxjikBazm} էգ գիշատիչ`); gishAxjikBazm = 0;
	console.log(`Մահացավ ${gishAxjikMah} էգ գիշատիչ`); gishAxjikMah = 0;
	console.log(`Ծնվեց ${dinoTxaBazm} արու դինոզավր`); dinoTxaBazm = 0;
	console.log(`Մահացավ ${dinoTxaMah} արու դինոզավր`); dinoTxaMah = 0;
	console.log(`Ծնվեց ${dinoAxjikBazm} էգ դինոզավր`); dinoAxjikBazm = 0;
	console.log(`Մահացավ ${dinoAxjikMah} էգ դինոզավր`); dinoAxjikMah = 0;
	console.log(`Մահացավ ${vorsordMah} որսորդ`); vorsordMah = 0;
}
let waitIndex = 0;
function draw() {
	if (frameCount % 60 == 0) {
		uxarkel();
	}
	document.title = exanak;
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 0) {
				if (exanak == "dzmer") {
					fill("#e8f5f7");
				}
				else if (exanak == "garun") {
					fill("#ddd");
				}
				else if (exanak == "amar") {
					fill("#aaa");
				}
				else if (exanak == "ashun") {
					fill("#ccc");
				}
			}
			else if (matrix[y][x] == 1) {
				if (exanak == "dzmer") {
					fill("#71fd59");
				}
				else if (exanak == "garun") {
					fill("#57d941");
				}
				else if (exanak == "amar") {
					fill("green");
				}
				else if (exanak == "ashun") {
					fill("#ef9638");
				}
			} else if (matrix[y][x] == 2) {
				fill("#ffff00");
			} else if (matrix[y][x] == 20) {
				fill("#ffff8b");
			} else if (matrix[y][x] == 3) {
				fill("#ff0000");
			} else if (matrix[y][x] == 30) {
				fill("#f95656");
			} else if (matrix[y][x] == 4) {
				if (exanak != "dzmer") {
					fill("orange");
				}
				else {
					fill("#222");
				}
			} else if (matrix[y][x] == 5) {
				fill("#614019");
			} else if (matrix[y][x] == 50) {
				fill("#a07d53");
			} else if (matrix[y][x] == 6) {
				fill("#0000ff");
			} else if (matrix[y][x] == 10) {
				fill("black");
			}
			rect(x * side, y * side, side, side);
		}
	}

	for (let i in grassArr) {
		if (exanak == "dzmer") {
			waitIndex++;
			if (waitIndex >= 2) {
				grassArr[i].bazmanal();
				waitIndex = 0;
			}
		} else {
			grassArr[i].bazmanal();
		}

	}
	for (let i in xotakerner) {
		if (!xotakerner[i].utel()) {
			xotakerner[i].sharjvel();
		}
		xotakerner[i].mahanal();
	}
	for (let i in xotakerAxjikner) {
		if (exanak != "dzmer") {
			xotakerAxjikner[i].bazmanal();
		}
		if (!xotakerAxjikner[i].utel()) {
			xotakerAxjikner[i].sharjvel();
		}
		xotakerAxjikner[i].mahanal();
	}
	for (let i in gishatichner) {
		if (!gishatichner[i].utel()) {
			gishatichner[i].sharjvel();
		}
		gishatichner[i].mahanal();

	}
	for (let i in gishatichAxjikner) {
		if (exanak != "dzmer") {
			gishatichAxjikner[i].bazmanal();
		}
		if (!gishatichAxjikner[i].utel()) {
			gishatichAxjikner[i].sharjvel();
		}
		gishatichAxjikner[i].mahanal();
	}
	for (let i in vorsordArr) {
		if (exanak != "dzmer") {
			if (!vorsordArr[i].krakel()) {
				vorsordArr[i].sharjvel();
			}
		}
	}
	for (let i in dinosaurArr) {
		if (exanak != "dzmer") {
			if (!dinosaurArr[i].utel()) {
				dinosaurArr[i].sharjvel();
			}
			dinosaurArr[i].mahanal();
		}
	}
	for (let i in dinosaurAxjikner) {
		if (exanak != "dzmer") {
			dinosaurAxjikner[i].bazmanal();
			if (!dinosaurAxjikner[i].utel()) {
				dinosaurAxjikner[i].sharjvel();
			}
			dinosaurAxjikner[i].mahanal();
		}
	}
	for (let i in annormalArr) {
		if (!annormalArr[i].utel()) {
			annormalArr[i].sharjvel();
		}
	}
}