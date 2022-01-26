import React,{useContext} from 'react';
import Context from '../../context/context';
import {Sleep} from '../../utility/sleep';
function Start() {
    const {arr,setArr,arrSize,speed,algorithm,setAlgorithm,start,setStart,colorArr,setColorArr}=useContext(Context);

    const setColorOfIndex= (index,colorMethod)=>{
            var tArr=[...colorArr];
            tArr[index]=colorMethod;
            setColorArr(tArr);
    }

    const swap=(a,b)=>{
        var tArr=[...arr];
        var temp=tArr[a];
        tArr[a]=tArr[b];
        tArr[b]=temp;
        setArr(tArr);
    }

    const bubbleSort=()=>{
        for (var i = 0; i < arrSize-1; i++)     
        for (var j = 0; j < arrSize-i-1; j++) 
        {
            if (arr[j] > arr[j+1]) 
                swap(j, j+1); 
        }
    }

    const selectionSort=()=>{  
        for (var i = 0; i < arrSize-1; i++)
        {
            var min_idx = i;
            for (var j = i+1; j < arrSize; j++)
            {
                if (arr[j] < arr[min_idx])
                {
                    min_idx = j;
                }
            }
            if(min_idx!=i)
            {
                swap(i,min_idx);
            }
        }
    }

   

    const startSort=()=>{   
        if(algorithm==="bubbleSort")
        bubbleSort(); 
        else if(algorithm==="selectionSort")
        selectionSort();
    }
  return (
  <div
  onClick={startSort}
  style={
    {
        //make it clickable
        cursor: 'pointer'
  }}>
      NEXT
  </div>
  );
}

export default Start;
