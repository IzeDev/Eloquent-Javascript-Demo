function main() {
    let sections = getElementByTagName(document.body, "section");
    
    let list = document.createElement("ul");
    for (let index = 0; index < sections.length; index++) {
        let listItem = document.createElement("li");
        listItem.textContent = sections[index].id;
        list.appendChild(listItem);
    }
    document.body.appendChild(list);
}

function getElementByTagName(parentNode, tagName) {
    let nodes = [];
    for (let index = 0; index < parentNode.childNodes.length; index++) {
        let node = parentNode.childNodes[index];
        if (node instanceof HTMLElement) {
            let nameInLower = node.tagName.toLowerCase();
            if (node.tagName.toLowerCase() === tagName.toLowerCase()) {
                nodes.push(node);
            }             
        }
    }
    return nodes;    
}