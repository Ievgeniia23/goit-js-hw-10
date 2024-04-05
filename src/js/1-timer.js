`use strict`
console.log("timer");


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import icon from "../img/Group.svg"



const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

const selector = document.getElementById("datetime-picker");
const startBtn = document.querySelector("button");
let userSelectedDate;
let deltaTime;

startBtn.disabled = true;

flatpickr(selector, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate > new Date()) {
        startBtn.disabled = false;
        deltaTime = userSelectedDate - new Date();
                  
       } else {
        startBtn.disabled = true;
        iziToast.show({
          iconUrl: icon,
          message:"Please choose a date in the future",
          messageColor: '#ffffff',
          color: '#ef4040',
          close: false,
          position: 'topRight',
        });
      }
    },
})
function startTimer() {
 const intervalId = setInterval(() => {
     const time = convertdeltaTime(deltaTime);            
     updateTimer(time);  
deltaTime -= 1000;
if (deltaTime <= 0) {
  clearInterval(intervalId)
}                     
}, 1000);
}

function convertdeltaTime(deltaTime) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
 
  const days = pad(Math.floor(deltaTime / day));
  const hours = pad(Math.floor((deltaTime % day) / hour));
  const minutes = pad(Math.floor(((deltaTime % day) % hour) / minute)); 
  const seconds = pad(Math.floor((((deltaTime % day) % hour) % minute) / second));

  function pad(value) {
  return String(value).padStart(2, "0");
}
  return { days, hours, minutes, seconds };
 }

function updateTimer({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}

startBtn.addEventListener("click",  () => {
    startTimer();
    startBtn.disabled = true;
    selector.disabled = true;
  });













