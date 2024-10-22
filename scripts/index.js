// Получаем все вкладки
const tabs = document.querySelectorAll(".tab");

// Добавляем обработчик клика для каждой вкладки
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Удаляем класс active у всех вкладок
    tabs.forEach((t) => t.classList.remove("active"));

    // Добавляем класс active к нажатой вкладке
    tab.classList.add("active");
  });
});
