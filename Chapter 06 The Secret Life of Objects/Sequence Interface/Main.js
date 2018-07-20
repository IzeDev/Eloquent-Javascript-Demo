class Sequence {
    constructor(collection) {
        this.collection = collection !== null && collection instanceof Array ?
            collection : new Array();
        this.currentIndex = this.collection.length;
    }

    resetSequence()
    {
        this.currentIndex = 0;
    }
    
    insert(element) {
        this.collection.push(element);
    }

    getNextElement() {
        let element = this.currentIndex < this.collection.length ?
            this.collection[this.currentIndex] : null;
        this.currentIndex++;        
        return element;
    }
}

function logFive(sequence) {
    for (let index = 0; index < 5; index++) {       
        let element = sequence.getNextElement();

        if (element !== null) {
            console.log(element);
        }
        else {
            break;
        }
    }
};

let mySequence = new Sequence(null);
mySequence.insert(1);
mySequence.insert(2);
mySequence.insert(3);
mySequence.insert(4);
mySequence.insert(5);
mySequence.insert(6);
mySequence.insert(7);
logFive(mySequence);
console.log("All done!");
