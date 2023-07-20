function fizzBuzz(n: number) {
  const answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    let current = "";

    if (i % 3 === 0) {
      current += "Fizz";
    }

    if (i % 5 === 0) {
      current += "Buzz";
    }

    answer.push(current || i.toString());
  }

  return answer;
}

const res = fizzBuzz(15);

console.log(fizzBuzz(15)[14]);
