const putin = document.getElementById('putin');
const navalny = document.getElementById('navalny');
const counter = document.querySelector('#counter')
//const input = document.querySelector('input');

document.addEventListener("click", function(event){
	jump();
});

let result = 0;
function jump() {
	if (putin.classList != "jump") {
		putin.classList.add("jump")
		result++;
		counter.textContent = result;
		//if(result>15){
			//alert("Ты своровал все что мог");
			//result = 0;
		//}

	}

	setTimeout(function(){
		putin.classList.remove("jump")
	}, 250)
}

let isAlive = setInterval(function(){
	let putinTop = parseInt(window.getComputedStyle(putin).getPropertyValue("top"));
	let navalnyLeft = parseInt(window.getComputedStyle(navalny).getPropertyValue("Left"));
	

	if(navalnyLeft < 40 && navalnyLeft > 0 && putinTop >= 150){
		alert("Ты попался, результат:"+result);
	


		result = 0;
		counter.textContent = result;
	}


}, 10)
