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

// Call func within try/catch block
try {
  incrementAndCall();
} catch (err) {
  console.error("Error:", err);
}

// Create HTML element to hold text
const textElement = document.createElement("div");
document.body.appendChild(textElement);

// Func to find prime numbers & append to the HTML element
function findPrimesAndAppend(n) {
  let primes = [];

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  textElement.textContent =
    "Prime numbers between 1 & " + n + ":\n" + primes.join(", ");
  alert("Prime numbers found!");
}

// Call the function to find prime numbers and append to the HTML element
findPrimesAndAppend(10000);
