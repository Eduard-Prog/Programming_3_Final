let gishTxaBazm = 0;
let gishTxaMah = 0;

class Gishatich extends KendaniEak{
	constructor(x, y,energy) {
        super(x,y,energy)
	}
	sharjvel() {
		let norVandak = random(super.yntrelVandak(0));
		if (norVandak) {
			if (this.energy > 0) {
				this.energy--;
			}
			matrix[this.y][this.x] = 0;
			matrix[norVandak[1]][norVandak[0]] = 3;
			this.x = norVandak[0];
			this.y = norVandak[1];
		}
		else{
			norVandak = random(super.yntrelVandak(1));
			if (norVandak) {
				matrix[this.y][this.x] = 0;
				matrix[norVandak[1]][norVandak[0]] = 3;
				this.x = norVandak[0];
				this.y = norVandak[1];
			}
		}
	}
	utel() {
		let gishatichVandak = random(super.yntrelVandak(2));
		if (gishatichVandak) {
			matrix[this.y][this.x] = 0;
			matrix[gishatichVandak[1]][gishatichVandak[0]] = 3;
			this.x = gishatichVandak[0];
			this.y = gishatichVandak[1];
			for (let i in xotakerner) {
				if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
					xotakerner.splice(i, 1);
					if (this.energy < 20) {
						this.energy += 3;
						xotTxaMah++;
					}
					return true;
				}
			}

		}
		return false;
	}
	mahanal() {
		if (this.energy <= 0) {
			for (let i in gishatichner) {
				if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
					gishatichner.splice(i, 1);
					matrix[this.y][this.x] = 0;
					gishTxaMah++;
					break;
				}
			}
		}
	}
}