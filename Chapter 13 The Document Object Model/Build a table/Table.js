function fillTableWithData(table, data) {
    for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
        let rowData = data[rowIndex];
        let tableRow = document.createElement("tr");
        for (let columnIndex = 0; columnIndex < rowData.length; columnIndex++) {
            let dataCell = rowData[columnIndex];
            let tableCell = rowIndex === 0 ?
                document.createElement("th") :  document.createElement("td");
                
            tableCell.textContent = dataCell.value;
            tableCell.style.textAlign = dataCell.isRightAligned ? "right" : "left";
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);        
    }
}

function main() {
    let table = document.createElement("table");
    let tableData = [
        [new Cell("Number"), new Cell("Name"), new Cell("Location")],
        [new Cell("1", true), new Cell("Jane"), new Cell("New York")],
        [new Cell("2", true),new Cell("John"), new Cell("London")]
    ];
    
    fillTableWithData(table, tableData);
    document.getElementById("TableWrapper").appendChild(table);
}


