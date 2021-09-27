let terminalInput = document.getElementById("terminal-input");

window.addEventListener("click", () => {
	terminalInput.focus();
});

window.addEventListener("touchend", () => {
	terminalInput.focus();
});