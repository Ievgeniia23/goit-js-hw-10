import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as l}from"./assets/vendor-77e16229.js";console.log("snackbar");const s=document.querySelector(".form");s.addEventListener("submit",i=>{i.preventDefault();const e=parseInt(document.querySelector('input[type="number"]').value),t=s.elements.state.value;new Promise((o,r)=>{setTimeout(()=>{t==="fulfilled"?o(e):t==="rejected"&&r(e)},e),s.reset()}).then(o=>{console.log(`✅ Fulfilled promise in ${e}ms`),l.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#ffffff",color:"#59A10D",close:!1,position:"topRight"})}).catch(o=>{console.log(`❌ Rejected promise in ${e}ms`),l.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"#ffffff",color:"#F96E6E",close:!1,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
