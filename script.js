// Declare counter

let counter = 0;

// Func incrementing counter recursively
function incrementAndCall() {
  counter++;
  try {
    incrementAndCall();
  } catch (err) {
    console.err("Error:", err);
    console.log("Counter value:", counter);
    setTimeout(() => {
      // Reset counter
      counter = 0;
      trampoline(incrementAndCall);
    }, 0);
  }
}
