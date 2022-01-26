import React,{useContext} from 'react';
import Context from '../../context/context';
function Start() {
    const {arr,setArr,arrSize,speed,algorithm,setAlgorithm,start,setStart,colorArr,setColorArr}=useContext(Context);

    const setColorOfIndex=(index,colorMethod)=>{
        setTimeout(()=>{
            var tArr=[...colorArr];
            tArr[index]=colorMethod;
            setColorArr(tArr);
        },5000/speed);
    }

    const swap=(a,b)=>{
        setTimeout(()=>{
        var tArr=[...arr];
        var temp=tArr[a];
        tArr[a]=tArr[b];
        tArr[b]=temp;
        setArr(tArr);
        setColorOfIndex(a,"normal");
        setColorOfIndex(b,"normal");
        },10000/speed);
    }

    const bubbleSort=()=>{
        for (var i = 0; i < arrSize-1; i++)     
        for (var j = 0; j < arrSize-i-1; j++) 
        {
            setColorOfIndex(j,"comparing");
            setColorOfIndex(j+1,"comparing");
            if (arr[j] > arr[j+1]) 
            {
                setColorOfIndex(j,"wrong_position");
                setColorOfIndex(j+1,"wrong_position");
                swap(j, j+1); 
                continue;
            }
            setColorOfIndex(j,"correct_position");
            setColorOfIndex(j+1,"correct_position");
        }
    }
    const startSort=()=>{
        setStart(true);    
        bubbleSort(); 
    }
  return (
  <div
  onClick={startSort}
  style={
    {
        //make it clickable
        cursor: 'pointer'
  }}>
      Sort
  </div>
  );
}

export default Start;
