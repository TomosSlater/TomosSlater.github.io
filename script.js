var img = document.getElementById("moveTest");
var rows = ["SRow", "ARow", "BRow", "CRow", "DRow", "ERow", "FRow"]
var currentRow = rows.indexOf(img.parentElement.id);

document.addEventListener('keydown', function(event) {
    console.log("KEYDOWN: " + event.key);
    console.log("Current row: " + currentRow);

    if(event.key === 'ArrowUp' && currentRow > 0){
        currentRow--;
        document.getElementById(rows[currentRow]).appendChild(img);
    } else if (event.key === 'ArrowDown' && currentRow < rows.length){
        currentRow++;
        document.getElementById(rows[currentRow]).appendChild(img);
    }
});

document.addEventListener('click', function(event) {
    console.log("Click!")
    console.log("Clicke on a: " + event.target.tagName);
    if(event.target.tagName === "img"){
        console.log("Image clicked!!!")
    }
});