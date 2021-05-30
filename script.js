const putin = document.getElementById('putin');
const navalny = document.getElementById('navalny');
const input = document.querySelector('input');

input.addEventListener("click", function(event){
	jump();
});

let result = 0;
function jump() {
	if (putin.classList != "jump") {
		putin.classList.add("jump")
		result++;
		if(result>15){
			alert("GG, перегрузи страницу");
			result = 0;
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
		alert("Вечер в хату"+result);
	


		result = 0;
	}


}, 10)
