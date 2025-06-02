document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".modal-close");

    // Відкриття модального вікна через чекбокс (бургер-меню)
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            modal.classList.add("is-open");
        } else {
            modal.classList.remove("is-open");
        }
    });

    // Закриття модального вікна через хрестик
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("is-open");
        checkbox.checked = false;
    });

    // Закриття при натисканні на фон
    modal.addEventListener("click", (event) => {
        if (!event.target.closest(".modal-window")) {
            modal.classList.remove("is-open");
            checkbox.checked = false;
        }
    });
});