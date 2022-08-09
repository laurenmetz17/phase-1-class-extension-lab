// Your code here
class Polygon {
    constructor(ints) {
        this.ints = ints;
    }

    get countSides() {
        return this.ints.length;
    }

    get perimeter() {
        let sum = 0;
        this.ints.forEach(side => {
            sum = sum + side;
        });
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.ints[0] + this.ints[1] <= this.ints[2]){
            return false;
        }
        else if(this.ints[1] + this.ints[2] <= this.ints[0]) {
            return false;
        }
        else if(this.ints[0] + this.ints[2] <= this.ints[1]) {
            return false;
        }
        else {
            return true;
        }
    }
}
class Square extends Polygon {
    get isValid() {
        if(this.ints[0] == this.ints[1] && this.ints[0] == this.ints[2] && this.ints[0] == this.ints[3]) {
            return true;
        }
        else {
            return false;
        }
    }

    get area() {
        if(this.isValid == true) {
            return this.ints[0] * this.ints[1];
        }
        else { return 'not a square'}
    }
}