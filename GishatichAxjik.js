let gishTxaBool = true;
let gishBool = true;
let gishAxjikBazm = 0;
let gishAxjikMah = 0;
class GishatichAxjik extends KendaniEak {
	constructor(x, y, energy) {
		super(x, y, energy)
	}
	sharjvel() {
		let norVandak = random(super.yntrelVandak(0));
		if (norVandak) {
			if (this.energy > 0) {
				this.energy--;
			}
			matrix[this.y][this.x] = 0;
			matrix[norVandak[1]][norVandak[0]] = 30;
			this.x = norVandak[0];
			this.y = norVandak[1];
		}
		else {
			norVandak = random(super.yntrelVandak(1));
			if (norVandak) {
				matrix[this.y][this.x] = 0;
				matrix[norVandak[1]][norVandak[0]] = 30;
				this.x = norVandak[0];
				this.y = norVandak[1];
			}
		}
	}
	utel() {
		let gishatichVandak = random(super.yntrelVandak(2));
		if (gishatichVandak) {
			matrix[this.y][this.x] = 0;
			matrix[gishatichVandak[1]][gishatichVandak[0]] = 30;
			this.x = gishatichVandak[0];
			this.y = gishatichVandak[1];
			for (let i in xotakerner) {
				if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
					xotakerner.splice(i, 1);
					this.energy += 3;
					xotAxjikMah++;
					return true;
				}
			}

		}
		return false;
	}
	bazmanal() {
		let norVandak = random(super.yntrelVandak(3));
		if (norVandak) {
			let x = norVandak[0];
			let y = norVandak[1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && gishBool) {
				gishBool = false;
				setTimeout(() => {
					gishBool = true;
				}, 3000);
				if (gishTxaBool) {
					let norGishatich = new Gishatich(x, y);
					gishatichner.push(norGishatich);
					matrix[y][x] = 3;
					gishTxaBool = false;
					gishTxaBazm++;
				}
				else {
					let norGishatich = new GishatichAxjik(x, y);
					gishatichAxjikner.push(norGishatich);
					matrix[y][x] = 30;
					gishTxaBool = true;
					gishAxjikBazm++;
				}
			}
		}
	}
	mahanal() {
		if (this.energy <= 0) {
			for (let i in gishatichner) {
				if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
					gishatichner.splice(i, 1);
					matrix[this.y][this.x] = 0;
					gishAxjikMah++;
					break;
				}
			}
		}
	}
}
