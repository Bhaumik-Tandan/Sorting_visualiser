import React,{useContext} from 'react';
import Context from '../../context/context';
function Algorithm() {
    const {setAlgorithm}=useContext(Context);
  return (
      //make a drop down
        <div>
            <select onChange={
                (e)=>{
                    setAlgorithm(e.target.value);
                }
            }>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="selectionSort">Selection Sort</option>
            </select>
        </div>
  );
}

export default Algorithm;
