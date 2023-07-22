let girlName = "Sheeza";
console.log("Hello, " + girlName + "! Welcome to the program.");

function generateFibonacciSequence(n: number): number[] {
    let sequence: number[] = [0, 1];
  
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  
    return sequence;
  }
  
  let limit: number = 10;
  let fibonacciSequence: number[] = generateFibonacciSequence(limit);
  console.log("Fibonacci Sequence up to " + limit + ":", fibonacciSequence);
  