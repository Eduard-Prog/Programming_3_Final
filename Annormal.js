class Annormal extends KendaniEak {
    constructor(x, y) {
        super(x, y);
    }

    sharjvel() {
        let norVandak = random(super.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
        }
        else {
            norVandak = random(super.yntrelVandak(1));
            matrix[this.y][this.x] = 1;
        }
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }

    }
    utel() {
        let selectedVandak = random(super.yntrelVandak(50));
        if (selectedVandak) {
            matrix[this.y][this.x] = 0;
            matrix[selectedVandak[1]][selectedVandak[0]] = 6;
            this.x = selectedVandak[0];
            this.y = selectedVandak[1];
            for (let i in dinosaurAxjikner) {
                if (dinosaurAxjikner[i].x == this.x && dinosaurAxjikner[i].y == this.y) {
                    dinosaurAxjikner.splice(i, 1);
                    dinoAxjikMah++;
                    return true;
                }
            }
        }
        else {
            selectedVandak = random(super.yntrelVandak(30));
            if (selectedVandak) {
                matrix[this.y][this.x] = 0;
                matrix[selectedVandak[1]][selectedVandak[0]] = 6;
                this.x = selectedVandak[0];
                this.y = selectedVandak[1];
                for (let i in gishatichAxjikner) {
                    if (gishatichAxjikner[i].x == this.x && gishatichAxjikner[i].y == this.y) {
                        gishatichAxjikner.splice(i, 1);
                        gishAxjikMah++;
                        return true;
                    }
                }
            }
            if (!selectedVandak) {
                selectedVandak = random(super.yntrelVandak(20));
                if (selectedVandak) {
                    matrix[this.y][this.x] = 0;
                    matrix[selectedVandak[1]][selectedVandak[0]] = 6;
                    this.x = selectedVandak[0];
                    this.y = selectedVandak[1];
                    for (let i in xotakerAxjikner) {
                        if (xotakerAxjikner[i].x == this.x && xotakerAxjikner[i].y == this.y) {
                            xotakerAxjikner.splice(i, 1);
                            xotAxjikMah++;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}