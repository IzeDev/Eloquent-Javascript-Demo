function rightPadText(text, paddLevel) {
    while (text.length < paddLevel) {
        text += " ";
    }
    return text;
};

function leftPadText(text, paddLevel) {
    while (text.length < paddLevel) {
        text = " " + text;
    }
    return text;
}

function paddText(text, paddLevel, doPadRight = true)
{
    return doPadRight === true ?
        rightPadText(text, paddLevel) : leftPadText(text, paddLevel);
}

class Cell {
    constructor(value) {
        this.value = value;
    }
    get width() {
        return this.value.length;
    }
    draw(width) {
        return paddText(this.value, width);
    }
};

class RightAlignedCell extends Cell {
    draw(width) {
        return paddText(this.value, width, false);
    }
};

function Table(cells) {
    return {
        cells : cells,
        getColumnWidths() {
            let widthOfEachCell = cells.map(a => a.map(c => c.width));
            let columns = [];
            for (let outerIndex = 0; outerIndex < widthOfEachCell.length; outerIndex++) {
                let innerArray = widthOfEachCell[outerIndex];
                
                for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
                    if(outerIndex == 0) {
                        columns[innerIndex] = [innerArray[innerIndex]];                   
                    }
                    else {
                        columns[innerIndex].push(innerArray[innerIndex]);
                    }
                }
            }

            return columns.map(arr => Math.max.apply(null, arr));
        },
        draw() {
            let columnWidths = this.getColumnWidths();
            let output = "";
            
            for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
                let cellsInRow = cells[rowIndex];
                for (let columnIndex = 0; columnIndex < cellsInRow.length; columnIndex++) {
                    output += cellsInRow[columnIndex].draw(columnWidths[columnIndex]) + " ";                   
                }
                output += "\n";
            }
            return output;
        }
    };
};

let table = new Table (
    [
        [new Cell("Number"), new Cell("Name"), new Cell("Location")],
        [new RightAlignedCell("1"), new Cell("Joseph"), new Cell("London")],
        [new RightAlignedCell("2"), new Cell("Jane"), new Cell("New York")],
    ]
);

console.log(table.draw());