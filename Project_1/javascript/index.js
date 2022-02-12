let count = 0
let countEL = document.getElementById("count")
let saveEL = document.getElementById("save-el")

console.log(count)

function increment() {
	//console.log("The button was clicked")
	count = count + 1
	//console.log(count)
	countEL.innerText = count
}

function save(){
	let tmp = count + " - "
	saveEL.textContent += tmp
	//console.log(count)
	count = 0;
	countEL.innerText = 0
}
