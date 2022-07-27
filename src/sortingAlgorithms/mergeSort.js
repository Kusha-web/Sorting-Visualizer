// export const mergeSort = array => {
//     //Base case
//     if(array.length === 1) {
//         return array;
//     }
//     const mid = Math.floor(array.length/2);
//     const leftHalf = mergeSort(array.slice(0, mid));
//     const rightHalf = mergeSort(array.slice(mid));

//     const sortedArray = [];
//     let i=0, j=0;
//     while(i<leftHalf.length && j<rightHalf.length) {
//         if(leftHalf[i]<rightHalf[j]) {
//             sortedArray.push(leftHalf[i++])
//         } else {
//             sortedArray.push(rightHalf[j++])
//         }
//     }

//     while(i<leftHalf.length)
//         sortedArray.push(leftHalf[i++]);

//     while(j<rightHalf.length)
//         sortedArray.push(rightHalf[j++])

//     return sortedArray;
// };

export const mergeSortAnimations = array => {
    const animations = [];
    if(array.length <= 1)
        return array;
    const auxillaryArray = array.slice();
    mergeSort(array, 0, array.length-1, auxillaryArray, animations);

    return animations;
}

function mergeSort(mainArray, start, end, auxillaryArray, animations) {
    //Base Case
    if(start === end)
        return;
    const mid = Math.floor((start + end)/2);
    mergeSort(auxillaryArray, start, mid, mainArray, animations);
    mergeSort(auxillaryArray, mid+1, end, mainArray, animations);
    doMerge(mainArray, start, mid, end, auxillaryArray, animations);
}

function doMerge(mainArray, start, mid, end, auxillaryArray, animations) {
    let k = start; //for mainarray to be updated with th sorted value
    let i = start;
    let j = mid+1;

    while(i<=mid && j<=end) {
        animations.push([i, j]);//for changing color
        animations.push([i, j]);//for reverting color
        
        if(auxillaryArray[i] <= auxillaryArray[j]) {
            animations.push([k, auxillaryArray[i]]);
            mainArray[k++] = auxillaryArray[i++];
        }
        else {
            animations.push([k, auxillaryArray[j]]);
            mainArray[k++] = auxillaryArray[j++];
        }
    }

    while(i<=mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxillaryArray[i]]);
        mainArray[k++] = auxillaryArray[i++];
    }

    while(j<=end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxillaryArray[j]]);
        mainArray[k++] = auxillaryArray[j++];
    }
}