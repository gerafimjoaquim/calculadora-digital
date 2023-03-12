const display = document.querySelector(".display input")

document.querySelectorAll(".key").forEach(k=>k.onclick = (event)=>
	display.value += event.target.textContent)

document.querySelector(".equal").onclick = ()=>display.value = eval(display.value)

document.querySelector(".delete").onclick = ()=>display.value=display.value
	.substring(0,display.value.length - 1)

document.querySelector(".clear").onclick = ()=>display.value=""