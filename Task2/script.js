function createElement(tag, properties, styles, parentElem, tableNumberRow = 0,tableNumberCell = 0, stylesCell = []) { 
    let elem = document.createElement(tag); 
    for (let propertie of properties) { 
        elem[propertie[0]] = propertie[1]; 
    } 
    for (let style of styles) { 
        elem.style[style[0]] = style[1]; 
    } 
    if (tag == "table"){
        let countRow;
        let countCell;
        for (countRow = 0; countRow < tableNumberRow; countRow++){
            let row = document.createElement("tr"); 
            for (countCell = 0; countCell < tableNumberCell; countCell++){
                let cell = document.createElement("td"); 
                for (let styleCell of stylesCell) { 
                    cell.style[styleCell[0]] = styleCell[1]; 
                } 
                row.append(cell); 
            }
            elem.append(row); 
        }
    }
    parentElem.append(elem); 
} 

createElement(tag = "input",properties = [ ["type", "text"], ["placeholder", "dolor sit amet"], ],styles = [ ["fontSize", "18px"], ["color", "red"], ],parentElem = document.querySelector(".first"));

createElement(tag = "table",properties = [],styles = [["width", "180px"], ["height", "180px"]],parentElem = document.querySelector(".first"),4,5,[["border","5px solid black"]]);

