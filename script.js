// === Part 2: JavaScript Functions ===

// Global variable
let globalCount = 0;

// Function with parameter + return value
function multiply(num) {
  return num * 2;
}

// Function showing local vs global scope
function incrementGlobal() {
  let local = 5; // local scope
  globalCount++; // global scope
  return `Local: ${local}, Global: ${globalCount}`;
}

// Function to update text content
function updateResult(message) {
  document.getElementById("result").textContent = message;
}

// === Part 3: JS + CSS Integration ===
document.getElementById("animateBtn").addEventListener("click", function () {
  let box = document.getElementById("box");

  // Toggle CSS animation on box
  box.classList.toggle("animate");

  // Call functions and show result
  let doubled = multiply(4);
  let scopeMsg = incrementGlobal();
  updateResult(`Doubled: ${doubled} | ${scopeMsg}`);
});
