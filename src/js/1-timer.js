`use strict`
console.log("timer");

// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const selector = document.getElementById("datetime-picker");
const startBtn = document.querySelector("button")



let userSelectedDate // змінна для зберігання обраної користувачем дати.

flatpickr(selector, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0]
      if (userSelectedDate > new Date()) {
        startBtn.disabled = false
      } else {
        startBtn.disabled = true;
        window.alert("Please choose a date in the future")
      }

      console.log(userSelectedDate); // отримуємо обрану дату
    },
})

//Створюємо функцію для запуску лічильника
function start() {

    const deltaTime = userSelectedDate - new Date();

    console.log("OK");
    // console.log(userSelectedDate);
    // console.log(new Date());
    console.log(deltaTime);
}
startBtn.disabled = true;

startBtn.addEventListener("click", start)

setInterval(() => {

}, 1000)


