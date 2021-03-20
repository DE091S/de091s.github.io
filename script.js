const putin = document.getElementById('putin');
const navalny = document.getElementById('navalny');

document.addEventListener("keydown", function(event){
	jump();
});

function jump() {
	if (putin.classList != "jump") {
		putin.classList.add("jump")
	}
	setTimeout(function(){
		putin.classList.remove("jump")
	}, 300)
}

let isAlive = setInterval(function(){
	let putinTop = parseInt(window.getComputedStyle(putin).getPropertyValue("top"));
	let navalnyLeft = parseInt(window.getComputedStyle(navalny).getPropertyValue("Left"));

	if(navalnyLeft < 40 && navalnyLeft > 0 && putinTop >= 150){
		alert("Вечер в хату")
	}
}, 10)
