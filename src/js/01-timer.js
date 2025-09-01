// flatpickr ve iziToast importluyoruz.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* DOM ögelerini seçiyoruz.*/
const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null; // Date objesi saklanacak
let intervalId = null; // setInterval id saklanacak

/* Helper functions */
function addLeadingZero(value) {
  // Tek haneli değerleri "04" biçimine getiriyor.
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  // Gün iki haneli (ve daha fazlası) olabilir; başlangıcı 2'den kısaysa 0 ekler.
  refs.daysEl.textContent = addLeadingZero(days);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.secondsEl.textContent = addLeadingZero(seconds);
}

function resetDisplayToZero() {
  updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
}

// Başlangıçta Start pasif olmalı
refs.startBtn.disabled = true;
// Göstergeyi sıfırla
resetDisplayToZero();

/*flatpickr başlatma */
const fpOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const picked = selectedDates[0];
    if (!picked) return;

    // Eğer seçilen tarih geçmiş veya şu andan önce ise uyar
    if (picked.getTime() <= Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      refs.startBtn.disabled = true;
      userSelectedDate = null;
    } else {
      // Gelecek tarih seçildi: butonu aktif et ve userSelectedDate'e ata
      userSelectedDate = picked;
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.datetimePicker, fpOptions);

/* Start butonu*/
refs.startBtn.addEventListener('click', () => {
  // Eğer valid bir tarih yoksa hiçbir şey yapma
  if (!userSelectedDate) return;

  // Başlatıldığında: butonu ve input'u kilitle
  refs.startBtn.disabled = true;
  refs.datetimePicker.disabled = true;

  // Eğer önceden interval çalışıyorsa temizle
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  // İlk güncelleme anlık olarak yapılır (1s gecikme olmaması için)
  const msLeft = userSelectedDate.getTime() - Date.now();
  if (msLeft <= 0) {
    resetDisplayToZero();
    iziToast.info({
      title: 'Info',
      message: 'Selected time is already passed',
      position: 'topRight',
    });
    return;
  } else {
    updateTimerDisplay(convertMs(msLeft));
  }

  // 1 saniyelik interval başlat
  intervalId = setInterval(() => {
    const delta = userSelectedDate.getTime() - Date.now();

    if (delta <= 0) {
      // Süre bitti: interval temizle, göstergeyi sıfırla, bilgilendir
      clearInterval(intervalId);
      intervalId = null;
      resetDisplayToZero();

      iziToast.success({
        title: 'Done',
        message: 'Countdown finished',
        position: 'topRight',
      });

      return;
    }

    const time = convertMs(delta);
    updateTimerDisplay(time);
  }, 1000);
});
