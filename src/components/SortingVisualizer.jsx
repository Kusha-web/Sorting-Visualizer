import React from "react";
import { useState, useEffect } from "react";
import { mergeSortAnimations } from "../sortingAlgorithms/mergeSort";
import { bubbleSortAnimations } from "../sortingAlgorithms/bubbleSort";

const PRIMARY_COLOR = 'blueviolet';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED = 10;

const SortingVisualizer = () => {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        resetArray();
    },[]);

    function resetArray() {
        const array = [];
        for(let i=0; i<100; i++) {
            array.push(randomInt(5,500));
        }
        setArr(array);
    }

    function mergeSort() {
        const animations = mergeSortAnimations(arr); 
        console.log(animations);
        //Main iteration foranimations
        for(let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange) {
                const[barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    //for swaping the sorted values
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED);
            }
        }       
    }


    function bubbliSort() {
    //     const arrayBars = document.getElementsByClassName('array-bar');
    // const barOneStyle = arrayBars[0].style;
    // const barTwoStyle = arrayBars[1].style;
    // barOneStyle.backgroundColor = PRIMARY_COLOR;
    // barTwoStyle.backgroundColor = SECONDARY_COLOR;
        const animations = bubbleSortAnimations(arr);
        for(let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            console.log(arrayBars[i].style);
            const isColorChange = i%4 !== 2 || i%4 !== 3;

            if(true) {
                const[barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[0].style;
                const barTwoStyle = arrayBars[0].style;
                const color = i%4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    //for swaping the sorted values
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED);
            }
        }
    }


    return (
        <div className="visual">
            <button onClick={() => resetArray()}>Generate New Array</button>
            <button onClick={() => mergeSort()}>Merge Sort</button>
            <button onClick={() => bubbliSort()}>Bubble Sort</button>
            <div className="array-container">
            {
               arr.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}>
                    </div>
               )) 
            }
            </div>
        </div>
    )
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}

export default SortingVisualizer;