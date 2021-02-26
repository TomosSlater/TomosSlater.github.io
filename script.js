var img = document.getElementById("moveTest");
var rows = ["SRow", "ARow", "BRow", "CRow", "DRow", "ERow", "FRow"]
var currentRow = rows.indexOf(img.parentElement.id);

document.addEventListener('keydown', function(event) {
    console.log("KEYDOWN: " + event.key);
});