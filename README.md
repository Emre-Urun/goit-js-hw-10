# 🚀 JavaScript Ödevleri: Timer & Snackbar Promises

Bu repository, **JavaScript kursu** kapsamında yapılan iki ödevi içerir:

1. ⏱️ **Geri Sayım Zamanlayıcı (Countdown Timer)**  
2. 🔔 **Snackbar Promise Bildirimleri**

---

## ⏱️ 1. Geri Sayım Zamanlayıcı

- Kullanıcı bir tarih ve saat seçer.  
- Seçilen tarih gelecekte ise **Start** butonu aktif olur.  
- Start butonuna basıldığında, gün, saat, dakika ve saniye olarak geri sayım başlar.  
- Zaman dolduğunda kullanıcı **iziToast** bildirimleri ile bilgilendirilir.  
- **flatpickr** kütüphanesi tarih/saat seçimi için kullanılmıştır.  
- Başlangıçta Start butonu pasif olup, geçersiz tarih seçildiğinde tekrar pasif hale gelir.  

**Teknolojiler:**  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JS-F7DF1E?style=flat&logo=javascript&logoColor=black) 
![flatpickr](https://img.shields.io/badge/flatpickr-42A5F5?style=flat&logo=flatpickr&logoColor=white) 
![iziToast](https://img.shields.io/badge/iziToast-FF6F61?style=flat&logo=react&logoColor=white)

**Demo:**  

![Timer Demo](assets/timer-demo.png)  
*Geri sayım timerının çalıştığı ekran görüntüsü.*

---

## 🔔 2. Snackbar Promise Bildirimleri

- Kullanıcı bir gecikme (ms) ve state (fulfilled/rejected) seçer.  
- Form submit edildiğinde Promise oluşturulur.  
- Belirlenen gecikme süresi sonunda Promise resolve veya reject olur.  
- Sonuç iziToast bildirimleri ile gösterilir:  


**Teknolojiler:**  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JS-F7DF1E?style=flat&logo=javascript&logoColor=black) 
![iziToast](https://img.shields.io/badge/iziToast-FF6F61?style=flat&logo=react&logoColor=white)

**Demo:**  

![Snackbar Demo](assets/snackbar-demo.png)  
*Snackbar promise bildirimi örneği.*

---

## 📂 Proje Yapısı
project/
│
├─ index.html
├─ public/
│ ├─ 01-timer.html
│ └─ 02-snackbar.html
├─ css/
│ ├─ 01-timer.css
│ └─ 02-snackbar.css
├─ js/
│ ├─ 01-timer.js
│ └─ 02-snackbar.js
├─ assets/ # Screenshot ve gif dosyaları
│ ├─ timer-demo.png
│ └─ snackbar-demo.png
└─ package.json


---

## ⚡ Kullanım

1. Repository'yi klonlayın:
   ```bash
   git clone <goit-js-hw-10>

