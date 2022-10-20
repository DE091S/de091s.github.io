
const prizes = [
  {

    
    text: "1",
    color: "hsl(197 30% 43%)",
  },
      {
    text: "1",
    color: "hsl(197 30% 43%)",
  },
  { 
    text: "2",
    color: "hsl(173 58% 39%)",

  },
      {
    text: "1",
    color: "hsl(197 30% 43%)",
  },
  {
      text: "2",
    color: "hsl(173 58% 39%)",
  },
    { 
    text: "3",
    color: "hsl(43 74% 66%)",
  },
    {
      text: "2",
    color: "hsl(173 58% 39%)",
  },

      {
    text: "1",
    color: "hsl(197 30% 43%)",
  },

  
];



const wheel = document.querySelector(".deal-wheel");
const spinner = wheel.querySelector(".spinner");
const trigger = wheel.querySelector(".btn-spin");
const ticker = wheel.querySelector(".ticker");

const prizeSlice = 360 / prizes.length;
const prizeOffset = Math.floor(180 / prizes.length);
const spinClass = "is-spinning";
const selectedClass = "selected";
const spinnerStyles = window.getComputedStyle(spinner);


let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let prizeNodes;
let vivod;
let bal = 1000;
let vvod;
let vvod2;
let vvod3;
let stv = 0;
let stv2 = 0;
let stv3 = 0;

const createPrizeNodes = () => {
  prizes.forEach(({ text, color, reaction }, i) => {
    const rotation = ((prizeSlice * i) * -1) - prizeOffset;
    spinner.insertAdjacentHTML(
      "beforeend",
      `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
        <span class="text">${text}</span>
      </li>`
    );
  });
};

const createConicGradient = () => {
  spinner.setAttribute(
    "style",
    `background: conic-gradient(
      from -90deg,
      ${prizes

        .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
        .reverse()
      }
    );`
  );
};

const setupWheel = () => {

  createConicGradient();
  createPrizeNodes();
  prizeNodes = wheel.querySelectorAll(".prize");
};

const spinertia = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runTickerAnimation = () => {
  const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];  
  let rad = Math.atan2(b, a);
  
  if (rad < 0) rad += (2 * Math.PI);
  
  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / prizeSlice);


  if (currentSlice !== slice) {

    ticker.style.animation = "none";
    setTimeout(() => ticker.style.animation = null, 10);
    currentSlice = slice;
  }
  tickerAnim = requestAnimationFrame(runTickerAnimation);
};

const selectPrize = () => {
  const selected = Math.floor(rotation / prizeSlice);
  
  if (selected == 1) {
    vivod = 1;
  }
  else if (selected == 2) {
    vivod = 2;
  }
  else if (selected == 3) {
    vivod = 1;
  }
  else if (selected == 4) {
    vivod = 2;
  }
  else if (selected == 5) {
    vivod = 3;
  }
  else if (selected == 6) {
    vivod = 2;
  }
  else if (selected == 7) {
    vivod = 1;
  }
  else{
    vivod = 1;
  }
console.log(vivod);

  prizeNodes[selected].classList.add(selectedClass);
};

trigger.addEventListener("click", () => {
  trigger.disabled = true;
  document.getElementById('stav').disabled = true;
  document.getElementById('stav2').disabled = true;
  document.getElementById('stav3').disabled = true;
  // задаём начальное вращение колеса
  rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
  // убираем прошлый приз
  prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));

  wheel.classList.add(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  ticker.style.animation = "none";
  runTickerAnimation();
});


spinner.addEventListener("transitionend", () => {
  cancelAnimationFrame(tickerAnim);
  rotation %= 360;
  selectPrize();
  if (vvod == 1 && vvod == vivod) {
    bal= bal + stv*11/10;
  }
    if (vvod2 == 2 && vvod2 == vivod) {
    bal= bal+ stv2*2;
  }
    if (vvod3 == 3 && vvod3 == vivod) {
    bal= bal + stv3*3;
  }

  document.getElementsByTagName("h1")[0].firstChild.data = "Баланс: "+bal;
  wheel.classList.remove(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  trigger.disabled = false;
  stv = 0;
  stv2 = 0;
  stv3 = 0;
  document.getElementById('stav').disabled = false;
  document.getElementById('stav2').disabled = false;
  document.getElementById('stav3').disabled = false;
  document.getElementsByTagName("h2")[1].firstChild.data = 0;
  document.getElementsByTagName("h2")[2].firstChild.data = 0;
  document.getElementsByTagName("h2")[3].firstChild.data = 0;
});




setupWheel();

function stavka(){
      if (bal<100) {
  document.getElementById('stav').disabled = true;
  document.getElementById('stav2').disabled = true;
  document.getElementById('stav3').disabled = true;
  }
  else{

  bal = bal - 100;
  console.log(bal);
  vvod = 1;

  stv = stv+100;
  document.getElementsByTagName("h1")[0].firstChild.data = "Баланс: "+bal;
  document.getElementsByTagName("h2")[1].firstChild.data = stv;
  console.log(stv);
}


}
function stavka2(){
      if (bal<100) {
  document.getElementById('stav').disabled = true;
  document.getElementById('stav2').disabled = true;
  document.getElementById('stav3').disabled = true;
  }
  console.log('hi');
  bal = bal - 100;
  console.log(bal);
  vvod2 = 2;
  stv2 = stv2+100;
  document.getElementsByTagName("h1")[0].firstChild.data = "Баланс: "+bal;
  document.getElementsByTagName("h2")[2].firstChild.data = stv2;


}
function stavka3(){
      if (bal<100) {
  document.getElementById('stav').disabled = true;
  document.getElementById('stav2').disabled = true;
  document.getElementById('stav3').disabled = true;
  }
  else{
  console.log('hi');
  bal = bal - 100;
  console.log(bal);
  vvod3 = 3;
  stv3 = stv3+100;
  document.getElementsByTagName("h1")[0].firstChild.data = "Баланс: "+bal;
  document.getElementsByTagName("h2")[3].firstChild.data = stv3;
}

}
