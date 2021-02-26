var img = document.getElementById("moveTest");
var rows = ["SRow", "ARow", "BRow", "CRow", "DRow", "ERow", "FRow"]
var currentRow = rows.indexOf(img.parentElement.id);

document.onkeydown = moveRow;

function moveRow(e){
    console.log("KEYDOWN!!!");
    e = e || window.event;

    if(e.KeyCode == '38' && currentRow > 0){
        currentRow--;
        document.getElementById(rows[currentRow]).appendChild(img);
        console.log("KEYDOWN(38)")
    } else if (e.KeyCode == '37' && currentRow < rows.length){
        currentRow++;
        document.getElementById(rows[currentRow]).appendChild(img);
        console.log("KEYDOWN(37)")
    }
}