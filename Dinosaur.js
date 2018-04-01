let dinoBool = false;
let dinoTxaBazm = 0;
let dinoTxaMah = 0;
class Dinosaur extends KendaniEak {
    constructor(x, y, energy) {
        super(x, y, energy);
    }

    sharjvel() {
        let norVandak = random(super.yntrelVandak(1));
        if (dinoBool == true) {
            matrix[this.y][this.x] = 0;
        } else {
            matrix[this.y][this.x] = 1;
        }
        if (norVandak) {
            dinoBool = false;
        } else {
            norVandak = random(super.yntrelVandak(0));
            dinoBool = true;
        }
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy -= .5;
        }
    }


    utel() {
        let gishatichVandak = random(super.yntrelVandak(3));
        if (gishatichVandak) {
            matrix[this.y][this.x] = 0;
            matrix[gishatichVandak[1]][gishatichVandak[0]] = 5;
            this.x = gishatichVandak[0];
            this.y = gishatichVandak[1];
            for (let i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    this.energy += 3;
                    gishTxaMah++;
                    return true;
                }
            }
        } else {
            let xotakerVandak = random(super.yntrelVandak(2));
            if (xotakerVandak) {
                matrix[this.y][this.x] = 0;
                matrix[xotakerVandak[1]][xotakerVandak[0]] = 5;
                this.x = xotakerVandak[0];
                this.y = xotakerVandak[1];
                for (let i in xotakerner) {
                    if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                        xotakerner.splice(i, 1);
                        this.energy += 4;
                        xotTxaMah++;
                        return true;
                    }
                }
            } else {
                let vorsordVandak = random(super.yntrelVandak(4));
                if (vorsordVandak) {
                    matrix[this.y][this.x] = 0;
                    matrix[vorsordVandak[1]][vorsordVandak[0]] = 5;
                    this.x = vorsordVandak[0];
                    this.y = vorsordVandak[1];
                    for (let i in vorsordArr) {
                        if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
                            vorsordArr.splice(i, 1);
                            this.energy += 2;
                            vorsordMah++;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    mahanal() {
        if (this.energy <= 0) {
            for (let i in dinosaurArr) {
                if (dinosaurArr[i].x == this.x && dinosaurArr[i].y == this.y) {
                    dinosaurArr.splice(i, 1);
                    matrix[this.y][this.x] = 1;
                    dinoTxaMah++;
                    break;
                }
            }
        }
    }
}
