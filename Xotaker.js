let xotTxaMah = 0;
let xotTxaBazm = 0;

class Xotaker extends KendaniEak {
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
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        let xotVandak = random(super.yntrelVandak(1));
        if (xotVandak) {
            matrix[this.y][this.x] = 0;
            matrix[xotVandak[1]][xotVandak[0]] = 2;
            this.x = xotVandak[0];
            this.y = xotVandak[1];
            for (let i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    this.energy += 2;
                    grassMah++;
                    return true;
                }
            }

        }
        return false;
    }
    mahanal() {
        if (this.energy <= 0) {
            for (let i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    xotTxaMah++;
                    break;
                }
            }
        }
    }
}
