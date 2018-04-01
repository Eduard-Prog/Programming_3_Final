let grassBazm = 0;
let grassMah = 0;

class Grass extends KendaniEak{
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }


    bazmanal() {
        let norVandak = random(super.yntrelVandak(0));
        let norVandak1 = random(super.yntrelVandak(0));
        this.multiply++;
        if (this.multiply >= 6 && norVandak && norVandak1 && norVandak != norVandak1) {
            let norXot = new Grass(norVandak[0], norVandak[1]);
            let norXot1 = new Grass(norVandak1[0], norVandak1[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            matrix[norVandak1[1]][norVandak1[0]] = 1;
            this.multiply = 0;
            grassBazm += 2;
        }
        else if (this.multiply >= 6 && norVandak) {
            let norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
            grassBazm++;
        }
    }
}
