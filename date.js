const dateElement = document.getElementById('date');
const weekdayElement = document.getElementById('weekday');
const today = new Date();

// день недели
const weekday = today.toLocaleDateString('ru-RU', {
  weekday: 'long'
});

// остальная дата
const fullDate = today.toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

// собираем HTML
dateElement.innerHTML = `${fullDate}`;
weekdayElement.innerHTML = `${weekday}`;