// ============================================================
// Task Manager — script.js
// Storage: Browser localStorage (data stays on this device)
// Security: Delivered via Azure Application Gateway + WAF V2
//           hosted on Azure Blob Storage (static website)
// ============================================================

// ── DOM Elements ────────────────────────────────────────────
const taskInput         = document.getElementById("task-input");
const addTaskBtn        = document.getElementById("add-task-btn");
const todosList         = document.getElementById("todo-list");
const itemsLeft         = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed-btn");
const emptyState        = document.querySelector(".empty-state");
const dateElement       = document.getElementById("date");
const filters           = document.querySelectorAll(".filter-btn");

let todos         = [];
let currentFilter = "all";

// ── localStorage Helpers ─────────────────────────────────────

function saveTodos() {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (e) {
    // localStorage full or unavailable (private browsing quota)
    console.warn("Could not save to localStorage:", e.message);
  }
}

function loadTodos() {
  try {
    const stored = localStorage.getItem("todos");
    todos = stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.warn("Could not read from localStorage:", e.message);
    todos = [];
  }
}

// ── Core Task Functions ───────────────────────────────────────

function addTodo(text) {
  if (text.trim() === "") return;

  const todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  todos.unshift(todo);
  saveTodos();
  renderTodos();
  updateItemsCount();
  checkEmptyState();
  taskInput.value = "";
}

function toggleTodo(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodos();
  renderTodos();
  updateItemsCount();
  checkEmptyState();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
  updateItemsCount();
  checkEmptyState();
}

function clearCompleted() {
  todos = todos.filter(t => !t.completed);
  saveTodos();
  renderTodos();
  updateItemsCount();
  checkEmptyState();
}

// ── Render ───────────────────────────────────────────────────

function renderTodos() {
  todosList.innerHTML = "";

  const filtered = filterTodos(currentFilter);

  filtered.forEach(todo => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (todo.completed) li.classList.add("completed");

    // Checkbox
    const label = document.createElement("label");
    label.classList.add("checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    label.appendChild(checkbox);
    label.appendChild(checkmark);

    // Text
    const span = document.createElement("span");
    span.classList.add("todo-item-text");
    span.textContent = todo.text;

    // Delete button
    const btn = document.createElement("button");
    btn.classList.add("delete-btn");
    btn.innerHTML = '<i class="fas fa-times"></i>';
    btn.setAttribute("aria-label", "Delete task");
    btn.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(label);
    li.appendChild(span);
    li.appendChild(btn);
    todosList.appendChild(li);
  });

  checkEmptyState();
}

// ── Utilities ────────────────────────────────────────────────

function filterTodos(filter) {
  switch (filter) {
    case "active":    return todos.filter(t => !t.completed);
    case "completed": return todos.filter(t => t.completed);
    default:          return todos;
  }
}

function updateItemsCount() {
  const n = todos.filter(t => !t.completed).length;
  itemsLeft.textContent = `${n} item${n !== 1 ? "s" : ""} left`;
}

function checkEmptyState() {
  const filtered = filterTodos(currentFilter);
  emptyState.classList.toggle("hidden", filtered.length > 0);
}

function setActiveFilter(filter) {
  currentFilter = filter;
  filters.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
  });
  renderTodos();
  checkEmptyState();
}

function setDate() {
  const options = { weekday: "long", month: "short", day: "numeric" };
  dateElement.textContent = new Date().toLocaleDateString("en-US", options);
}

// ── Event Listeners ──────────────────────────────────────────

addTaskBtn.addEventListener("click", () => addTodo(taskInput.value));

taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo(taskInput.value);
});

clearCompletedBtn.addEventListener("click", clearCompleted);

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    setActiveFilter(btn.getAttribute("data-filter"));
  });
});

// ── Init ─────────────────────────────────────────────────────

window.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  renderTodos();
  updateItemsCount();
  setDate();
});