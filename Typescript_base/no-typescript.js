function add(a, b) {
  return a + b;
}

const result = add(2, 5);
const resultSecond = add ('2','5') // problem is that this code has also been exceuted and not even a 
//warning has been shown, here we can manage that we need to pass the numbers to the function but in 
//bigger applications it's not easy to identify which paramater to pass to which function so we need TypeScript

console.log(result); // 7
console.log(resultSecond); //25 

// THE ABOVE CODE IS NOT USING THE TYPESCRIPT, HENCE USING THE SIMPLE BASIC JAVASCRIPT ONLY