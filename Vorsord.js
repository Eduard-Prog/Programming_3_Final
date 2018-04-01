let bool = false;
let vorsordMah = 0;
class Vorsord extends KendaniEak{
	constructor(x, y) {
        super(x,y);
    }
	sharjvel() {
		let norVandak = random(super.yntrelVandak(0));
		if (bool == true) {
			matrix[this.y][this.x] = 1;
		} else {
			matrix[this.y][this.x] = 0;
		}
		if (norVandak) {
			bool = false;
		} else {
			norVandak = random(super.yntrelVandak(1));
			bool = true;
		}
		if (norVandak) {
			matrix[norVandak[1]][norVandak[0]] = 4;
			this.x = norVandak[0];
			this.y = norVandak[1];
		}
	}
	krakel() {
		let gishatichVandak = random(super.yntrelVandak(3));
		if (gishatichVandak) {
			matrix[gishatichVandak[1]][gishatichVandak[0]] = 0;
			for (let i in gishatichner) {
				if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
					gishatichner.splice(i, 1);
					gishTxaMah++;
					return true;
				}
			}
		}

		return false;
	}
}