const editor = document.getElementById("editor");
const previousText = localStorage.getItem("dataText");
editor.value = previousText;
editor.addEventListener("keydown", keyData);

function keyData() {
	localStorage.setItem("dataText", this.value);
}

clearBtn.addEventListener("click", function () {
	editor.value = "";
	localStorage.removeItem("dataText");
});