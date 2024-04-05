`use strict`

console.log("snackbar");

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")

form.addEventListener("submit", event => {
  event.preventDefault();
  
  const delay = parseInt(document.querySelector('input[type="number"]').value);
  const radioBtnValue = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  if(radioBtnValue === "fulfilled") {
    resolve(delay);
    } else if (radioBtnValue === "rejected") {
    reject(delay);
  }
  }, delay);
  form.reset();
});

promise
  .then((resolve) => {
    console.log(`✅ Fulfilled promise in ${delay}ms`);

    iziToast.show({
                message:`✅ Fulfilled promise in ${delay}ms`,
                messageColor: '#ffffff',
                color: '#59A10D',
                close: false,
                position: 'topRight',
              });

        })

  .catch((reject) => {
    console.log(`❌ Rejected promise in ${delay}ms`);
    iziToast.show({
                message:`❌ Rejected promise in ${delay}ms`,
                messageColor: '#ffffff',
                color: '#F96E6E',
                close: false,
                position: 'topRight',
              });
    });
  });






  