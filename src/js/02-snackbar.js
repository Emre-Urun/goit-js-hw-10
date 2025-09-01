import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Form ve input ögelerini seçiyoruz.
const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
// promise ögesini oluşturuyoruz.
function createPromise(delay, state) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); // Promise başarılı olacak
      } else {
        rejected(delay); // Promise reddedilecek
      }
    }, delay);
  });
}
// Forma submit eventinı ekliyoruz.
form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(delayInput.value);
  const state = form.querySelector('input[name="state"]:checked')?.value;

  createPromise(delay, state)
    .then(result => {
      // Promise başarılığı olduğunda izotoast ile mesajı gönder
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${result} ms`,
        position: 'topRight',
      });
    })
    .catch(result => {
      // Promise başarısız olduğunda izitoast ile mesaj gönder
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${result} ms`,
        position: 'topRight',
      });
    });
});
