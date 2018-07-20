function Vector(x, y) {
    return {
        x : x,
        y : y,
        plus : function(vector) {
            return new Vector(this.x + vector.x, this.y + vector.y);
        },
        minus : function(vector) {
            return new Vector(this.x - vector.x, this.y - vector.y);
        },
        get length() {
            let length = x >= 0 ? x : x * -1;
            return length + (y >= 0 ? y : y * -1);
        }
    };
};

let v1 = new Vector(1, 1);
let v2 = new Vector(1, 1);
let v3 = v1.plus(v2);
let v4 = v1.minus(v2);
var l1 = v1.length;
var l2 = v2.length;
var l3 = v3.length;
var l4 = v4.length;

console.log("All done.");
