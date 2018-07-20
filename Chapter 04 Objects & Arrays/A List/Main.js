function addItemToList(list, item) {
    if (list === undefined) {
        return {value : item};
    }
    else {
        return {
            value : item,
            rest : {
                value : list.value,
                rest : list.rest
            }
        }
    }
}

function getItemAt(list, index) {
    
    if (index === 0) {
        return list.value;
    }
    else if (list.rest === undefined) {
        return undefined;
    }
    if(index < 0) {
        return undefined;
    }
    else
    {
        let listParameter = {value : list.rest, rest : list.rest.rest };
        return getItemAt(listParameter, index - 1)
    }
}

function arrayToList(array) {
    let list;

    for (let index = array.length; index >= 0; index--) {
        list = addItemToList(list, array[index]);
    }
    return list;
}

function listToArray(list) {
    let array = [];
    let workingList = { value : list.value, rest : list.rest };
    let doContinue = true;

    while(doContinue) {    
        let item = getItemAt(workingList, 0);
        if (item === undefined) {
            doContinue = false;
        }
        else {
            array.push(item);
            workingList =  workingList.rest;
        }
    }

    return array;
}

let array = [1, 2, 3];
let list = arrayToList(array);
let item = getItemAt(list, 1);
let arrayFromList = listToArray(list);
console.log("All done!");