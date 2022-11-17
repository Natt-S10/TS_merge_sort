function merge(arr0: number[], arr1: number[]){
    let p0 = 0, p1 = 0
    let merged: number[] = []
    if (arr0.length == 0) return arr1
    else if (arr1.length == 0) return arr0

    if(arr0[0] > arr1[0]){
    [arr0, arr1] = [arr1, arr0] // first element of arr0 is always less than that on the second one
    }
    while(true){
        while(p0 < arr0.length &&  (p1 >= arr1.length || arr0[p0] <= arr1[p1])){
            merged.push(arr0[p0])
            p0 += 1
        }
        while(p1 < arr1.length &&   (p0 >= arr0.length || arr1[p1] <= arr0[p0])){
            merged.push(arr1[p1])
            p1 += 1
        }
        if(p0 >= arr0.length && p1 >= arr1.length) break
    }   
    return merged
}
console.log(merge(
    [1,5,6,7,10, 11, 15],
    [2,3,4,8,9,12,13,14]
))

export {merge}
