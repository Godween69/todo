const input = document.getElementById("input");
const addButton = document.getElementById("addButton");

const taskList = document.getElementById("task-list");
const doneList = document.getElementById("done-list");

const totalCountEl = document.getElementById("total-count");
const doneCountEl = document.getElementById("done-count");

// ==================
// ДОБАВЛЕНИЕ ЗАДАЧИ
// ==================
function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  // текст задачи
  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = text;

  // ✔ КНОПКА ГОТОВО
  const doneBtn = document.createElement("button");
  doneBtn.className = "done-button";
  doneBtn.innerHTML = "✔";

  // ❌ КНОПКА УДАЛИТЬ
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  deleteBtn.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18">
      <line x1="5" y1="5" x2="19" y2="19"/>
      <line x1="19" y1="5" x2="5" y2="19"/>
    </svg>
  `;

  // порядок внутри li
  li.append(doneBtn, textSpan, deleteBtn);

  // добавляем ТОЛЬКО в активные задачи
  taskList.prepend(li);
  updateCounters();

  // ==================
  // РАСКРЫТИЕ ЗАДАЧИ
  // ==================
  li.addEventListener("click", () => {
    document
      .querySelectorAll("#task-list li.expanded")
      .forEach(el => el.classList.remove("expanded"));

    li.classList.add("expanded");
  });

  // ==================
  // УДАЛЕНИЕ
  // ==================
  deleteBtn.addEventListener("click", e => {
    e.stopPropagation();
    li.remove();
    updateCounters();
  });

  // ==================
  // ВЫПОЛНЕНО
  // ==================
  doneBtn.addEventListener("click", e => {
    e.stopPropagation();

    li.classList.remove("expanded");
    li.classList.add("done");

    doneBtn.remove();
    deleteBtn.remove();

    doneList.prepend(li);
    updateCounters();
  });

  input.value = "";
}

// ==================
// КНОПКА +
// ==================
addButton.addEventListener("click", addTask);

// ==================
// ENTER
// ==================
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    addTask();
  }
});

// ==================
// СЧЁТЧИКИ
// ==================
function updateCounters() {
  totalCountEl.textContent = taskList.children.length;
  doneCountEl.textContent = doneList.children.length;
}
