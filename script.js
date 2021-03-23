const putin = document.getElementById('putin');
const navalny = document.getElementById('navalny');

document.addEventListener("keydown", function(event){
	jump();
});

let result = 0;

function jump() {
	if (putin.classList != "jump") {
		putin.classList.add("jump")
		result++;
		if(result>15){
			alert("ты своровал все деньги, перегрузи страницу");
		}

	}
	setTimeout(function(){
		putin.classList.remove("jump")
	}, 300)
}

let isAlive = setInterval(function(){
	let putinTop = parseInt(window.getComputedStyle(putin).getPropertyValue("top"));
	let navalnyLeft = parseInt(window.getComputedStyle(navalny).getPropertyValue("Left"));

	if(navalnyLeft < 40 && navalnyLeft > 0 && putinTop >= 150){
		alert("Ты попалсяб вечер в хату")
	}
}, 10)
