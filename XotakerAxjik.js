let txaBool = true;
let Bool = true;
let xotAxjikBazm = 0;
let xotAxjikMah = 0;

class XotakerAxjik extends KendaniEak {
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
            matrix[norVandak[1]][norVandak[0]] = 20;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    bazmanal() {
        let norVandak = random(super.yntrelVandak(2));
        if (norVandak) {
            let x = norVandak[0];
            let y = norVandak[1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && Bool) {
                Bool = false;
                setTimeout(() => {
                    Bool = true;
                }, 2000);
                if (txaBool) {
                    let norXotaker = new Xotaker(x, y);
                    xotakerner.push(norXotaker);
                    matrix[y][x] = 2;
                    txaBool = false;
                    xotTxaBazm++;
                }
                else {
                    let norXotaker = new XotakerAxjik(x, y);
                    xotakerAxjikner.push(norXotaker);
                    matrix[y][x] = 20;
                    txaBool = true;
                    xotAxjikBazm++;
                }
            }
        }
    }
    utel() {
        let xotVandak = random(super.yntrelVandak(1));
        if (xotVandak) {
            matrix[this.y][this.x] = 0;
            matrix[xotVandak[1]][xotVandak[0]] = 20;
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
                    xotAxjikMah++;
                    break;
                }
            }
        }
    }
}
