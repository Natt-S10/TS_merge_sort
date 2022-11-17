# TS_merge_sort
Made for Primo Internship skill test

## Info.
> The "merge" function is implemented as shown in `main.ts` 
 It is tested with `tests/main.test.ts` using a function to call `merge()` recursively (similar to merge sort algorithm) to sort a shuffled array of integer from 1 to `len` . The resulted array was ensured by checking similarity to the template array.
## setup: 
1. run cli in the following sequence 
   ```
   npm init -y
   npm install typescript
   npm install --save-dev @types/core-js @types/jest jest ts-jest
   ``` 
2. add `tsconfig.json` 
##  Execute and test 
1. add the following script to `package.json`
    ```
    "scripts": {
        "dev": "tsc main.ts && node main.js",
        "test": "jest"
    },
    ```
2. run `npm run dev` to execute main.ts, and run `npm test` to test the function with jest
