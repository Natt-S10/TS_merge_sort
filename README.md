# TS_merge_sort
Made for Primo Internship skill test

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
