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

// Calculates max call stack size
function getMaxStackSize() {
  let count = 0;

  function recursFunc() {
    count++;
    try {
      recursFunc();
    } catch (err) {
      console.log("Max call stack size:", count);
    }
  }

  recursFunc();
}
// Call and log max stack size
getMaxStackSize();

// Defers execution with setTimeout and trampoline to handle stack overflow
function trampoline(fn) {
  setTimeout(fn, 0);
}
