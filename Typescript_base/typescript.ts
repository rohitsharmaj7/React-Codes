function addNumbers(a: number,b: number)
{
     return a+b
}

const resultObtained = addNumbers(2,5) // will give error here only as the function demand parameters of type 
// numbers, This is the benefit of using typescript that we came to know about the error even before running our app
console.log(resultObtained);

//npm i typescript
// npx tsc typescript.ts