export const bubbleSortAnimations = array => {
    const animations = [];
    const n = array.length;
    
    for(let i=0; i<n-1; i++) {
        for(let j=0; j<n-i-1; j++) {
            animations.push([j, j+1]);// for color change
            animations.push([j, j+1]);// for reverting the color
            if(array[j] > array[j+1]) {
                //for swapping animations
                animations.push([j, array[j+1]]);
                animations.push([j+1, array[j]]);
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
            else {
                animations.push([j, array[j]]);
                animations.push([j+1, array[j+1]]);
            }
        }
    }

    return animations;
}

