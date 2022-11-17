import { merge } from "../main";

function shuffle(array: number[]): number[]  {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function trySort(arr: number[]):number[] { 
  if(arr.length <= 1){
    return arr
  }
  let half = Math.floor(arr.length/2)
  let arr0 = trySort(arr.slice(0, half))
  let arr1 = trySort(arr.slice(half, arr.length))
  return merge(arr0, arr1)
  
}


describe("testing main file", () => {
  test("merge function should merge two sorted array correctly", () => {
    const testlen = 1001;
    let template: number[] = Array.from({ length: testlen }, (_, k) => k);
    let arr: number[] = Array.from({ length: testlen }, (_, k) => k);
    let shuffled = shuffle(arr)
    let merged = trySort(shuffled)

    console.log(template)
    console.log(arr)
    console.log(merged)
    expect(merged.every((val, index) => val === template[index])).toBe(true)
    

  });
});

// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2) : int []

// given
//      collection_1, collection_2 already sorted from min(0) to max

// Please provide accessible repo of typescript project with unit test
// and provide how to setup dependency and execute code and unit test

// Note: Don't allow to use any sort function